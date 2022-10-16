const functions = require('firebase-functions');
const {google} = require('googleapis');

const axios = require('axios');

exports.validateIOS = functions.region('europe-west2').https.onCall(async d => {
  const data = JSON.stringify({
    'receipt-data': d['receipt-data'],
    password: 'password here', //store in secrets manager for better security
    'exclude-old-transactions': true,
  });

  const result = await axios.post(
    'https://sandbox.itunes.apple.com/verifyReceipt', //'https://buy.itunes.apple.com/verifyReceipt',

    data,
  );

  console.log(result);
});

exports.validateAndroid = functions
  .region('europe-west2')
  .https.onCall(async data => {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'keyfile here', //store in secrets manager for better security
      scoped: ['https://www.googleapis.com/auth/androidpublisher'],
    });

    try {
      const res = await google.androidpublisher('v3').purchases.products.get({
        packageName: 'com.ProjectEscape.ProjectEscapeApp',
        productId: JSON.parse(data)['productId'],
        token: JSON.parse(data)['purchaseToken'],
        auth: auth,
      });

      functions.logger.warn(res);
      // if (res.status == 200) {
      //   console.log(res.data);
      //   functions.logger.info(res.data, {
      //     structuredData: true,
      //   });
      //   return res.data.paymentState === 1;
      // }
    } catch (error) {
      return {error: -1};
    }
  });
