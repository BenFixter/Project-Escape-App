import * as React from 'react';
import {Image} from 'native-base';

module.exports = props => {
  return (
    <Image
      height="50"
      resizeMode="contain"
      source={require('../../assets/logo-margin-small.png')}
      alt="Project Escape"
    />
  );
};
