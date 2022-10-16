import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Components
import {HomeStack, NewsStack, GamesStack} from './Stacks';
//Icons
import IonIcons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import palette from '../../theme/palette';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const homeIcon = focused => (
    <FeatherIcons
      name="home"
      color={focused ? palette.primary[500] : '#fff'}
      size={26}
    />
  );
  const newsIcon = focused => (
    <IonIcons
      name="newspaper-outline"
      color={focused ? palette.primary[500] : '#fff'}
      size={26}
    />
  );
  const gamesIcon = focused => (
    <IonIcons
      name="game-controller-outline"
      color={focused ? palette.primary[500] : '#fff'}
      size={26}
    />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => homeIcon(focused),
        }}
      />
      {/* <Tab.Screen
        name="News"
        component={NewsStack}
        options={{
          tabBarIcon: ({focused}) => newsIcon(focused),
        }}
      /> */}
      <Tab.Screen
        name="Games"
        component={GamesStack}
        options={{
          tabBarIcon: ({focused}) => gamesIcon(focused),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
