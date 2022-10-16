import {Platform} from 'react-native';
import {Text} from 'native-base';
import * as React from 'react';
import IAP from 'react-native-iap';

import ProductsConfig from '../configs/ProductsConfig';
import GameCard from '../components/Games/GameCard';
import {useNavigation} from '@react-navigation/native';

const items = Platform.select({
  ios: ['com.projectescape.projectescapeapp.game2'],
  android: ['com.projectescape.projectescapeapp.game2'], //peapp_499_game02,
});

let purchaseUpdatedListener;
let purchaseErrorListener;

function GamesScreen() {
  const navigation = useNavigation();
  const [Products, setProducts] = React.useState(ProductsConfig);
  const [Validating, setValidating] = React.useState(true);

  //Validate receipt
  const validate = async receipt => {
    setValidating(true);

    const receiptBody = {
      'receipt-data': receipt,
    };

    if (Platform.OS === 'ios') {
      return fetch(
        'firebase link',
        {
          headers: {'Content-Type': 'application/json'},
          method: 'POST',
          body: JSON.stringify({data: receiptBody}),
        },
      );
    }

    if (Platform.OS === 'android') {
      return fetch(
        'firebase link',
        {
          headers: {'Content-Type': 'application/json'},
          method: 'POST',
          body: JSON.stringify({data: receiptBody}),
        },
      );
    }
  };

  React.useEffect(() => {
    console.log('Connecting To Store...');
    IAP.initConnection()
      .then(async () => {
        console.log('Connected To Store!');

        if (Platform.OS === 'android') {
          IAP.flushFailedPurchasesCachedAsPendingAndroid();
          console.log('clear android');
        } else {
          IAP.clearTransactionIOS();
          console.log('cleared transactions for ios');
        }

        await getItems();
        await purchaseHistory();

        purchaseUpdatedListener = IAP.purchaseUpdatedListener(
          async purchase => {
            const receipt = purchase.transactionReceipt;
            const productId = purchase.productId;

            try {
              const res = await validate(receipt);
              let updatedProduct = Products.map(product => {
                console.log(product);
                if (product.productId == productId) {
                  console.log(
                    `Thank you for purchasing ${product.title} for ${product.localizedPrice}`,
                  );

                  return Object.assign(product, {
                    purchased: true,
                  });
                }
              });
              setProducts(Products, ...updatedProduct);
              console.log('==========After Purchase Start==========');
              console.log(Products);
              console.log('==========After Purchase End==========');
              await IAP.finishTransaction(purchase, false);
              setValidating(false);
            } catch (error) {
              console.error(error);
            }
          },
        );

        purchaseErrorListener = IAP.purchaseErrorListener(error => {
          if (error.code === 'E.ALREADY_OWNED') {
            console.log('OWNED');
          }
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, [Products]);

  //Get/Set items
  const getItems = async () => {
    try {
      const productList = await IAP.getProducts(items);

      console.log('===========PRODUCT LIST==========');
      console.log(productList);
      console.log('===========PRODUCT LIST==========');

      let updatedProducts = productList
        .filter(product => Products.find(p => p.productId == product.productId))
        .map(product => {
          let inProductConfig = Products.find(
            p => p.productId == product.productId,
          );
          return Object.assign(inProductConfig, {
            description: product.description,
            localizedPrice: product.localizedPrice,
          });
        });

      setProducts(Products, ...updatedProducts);
      console.log('==========Get Products Start==========');
      console.log(Products);
      console.log('==========Get Products End==========');
      setValidating(false);
    } catch (error) {
      console.error(error);
    }
  };

  //Get Purchase history
  const purchaseHistory = async () => {
    setValidating(true);

    try {
      const productList = await IAP.getPurchaseHistory();

      let updatedProducts = Products.map(productConfig => {
        let foundProduct = productList.find(
          p => p.productId == productConfig.productId,
        );

        if (foundProduct) {
          return Object.assign(productConfig, {
            purchased: true,
          });
        }
      });

      setProducts(Products, ...updatedProducts);
      console.log('==========Get History Start==========');
      console.log(Products);
      console.log('==========Get History End==========');
    } catch (error) {
      console.error(error);
    }
    setValidating(false);
  };

  console.log('==========Products FINAL==========');
  console.log(Products);
  console.log('==========Products FINAL==========');

  if (Validating) {
    return null; //connecting to store
  } else {
    if (Products.length > 0) {
      return <GameCard navigation={navigation} products={Products}></GameCard>;
    } else {
      return null; //No games found
    }
  }
}

export default GamesScreen;
