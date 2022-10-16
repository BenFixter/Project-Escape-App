import * as React from 'react';
import GamesConfig from '../../configs/GamesConfig';

const checkGame = (productId, navigation) => {
  switch (productId) {
    case 'peapp_499_game01':
      navigation.navigate('Game', GamesConfig[0], navigation);
      break;
    case 'com.projectescape.projectescapeapp.game2': //peapp_499_game02
      navigation.navigate('Game', GamesConfig[1], navigation);
      break;
    default:
      console.error(`${productId} not found`);
      break;
  }
};

function GameManager(props) {
  const productId = props.productId;
  const navigation = props.navigation;

  checkGame(productId, navigation);
}

export default GameManager;
