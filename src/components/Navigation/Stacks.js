import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//Components
import TopBar from './TopBar';

//Screens
import BackButton from './BackButton';
import HomeScreen from '../../screens/HomeScreen';
import RoomDetailsScreen from '../../screens/RoomDetailsScreen';
import NewsScreen from '../../screens/NewsScreen';
import GamesScreen from '../../screens/GamesScreen';
import Game from '../../screens/Game';

import FinishGameScreen from '../../screens/FinishGameScreen';

//Screen Stacks
const HomeScreenStack = createStackNavigator();
const NewsScreenStack = createStackNavigator();
const GamesScreenStack = createStackNavigator();

module.exports = {
  HomeStack: () => {
    return (
      <HomeScreenStack.Navigator
        screenOptions={{
          headerTitle: () => TopBar(),
          headerBackImage: () => <BackButton />,
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}>
        <HomeScreenStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeScreenStack.Screen
          name="RoomDetailsScreen"
          component={RoomDetailsScreen}
        />
      </HomeScreenStack.Navigator>
    );
  },
  NewsStack: () => {
    return (
      <NewsScreenStack.Navigator
        screenOptions={{
          headerTitle: () => TopBar(),
          headerBackImage: () => <BackButton />,
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}>
        <NewsScreenStack.Screen name="NewsScreen" component={NewsScreen} />
      </NewsScreenStack.Navigator>
    );
  },
  GamesStack: () => {
    return (
      <GamesScreenStack.Navigator
        screenOptions={{
          headerTitle: () => TopBar(),
          headerBackImage: () => <BackButton />,
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}>
        <GamesScreenStack.Screen name="GamesScreen" component={GamesScreen} />
        <GamesScreenStack.Screen name="Game" component={Game} />
        <GamesScreenStack.Screen
          name="FinishGameScreen"
          component={FinishGameScreen}
        />
      </GamesScreenStack.Navigator>
    );
  },
};
