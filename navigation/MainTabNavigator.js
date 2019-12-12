import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ScheduleScreen from '../screens/ScheduleScreen';
import ArtistsScreen from '../screens/ArtistsScreen';
import AboutScreen from '../screens/AboutScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
  },
  config
);

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedules',

  

  
  tabBarIcon: ({ focused,tintColor }) => (
    <TabBarIcon
      focused={focused}
      tintColor={{ tintColor }}
      name={
        Platform.OS === 'ios'
          ? `ios-calendar`
          : 'md-calendar'
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: '#cd077d',
    activeTintColor: '#e07204',
  activeBackgroundColor : "#e07204",
  inactiveTintColor : "#e07204",
  tabStyle : {
    backgroundColor:"#0a0a09"

  }
    

}
};

ScheduleStack.path = '';

const ArtistsStack = createStackNavigator(
  {
    Artists: ArtistsScreen,
    

  },
  config
);

ArtistsStack.navigationOptions = {
  tabBarLabel: 'Artists',
  

 
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'} />
  ),
};

ArtistsStack.path = '';
ArtistsStack.Ta

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  config
);


//favorite tab bar

const FavoriteStack = createStackNavigator(
  {
    Favorite: FavoriteScreen,
  },
  config
);

FavoriteStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} />
  ),
};



//about tab bar

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'} />
  ),
};

AboutStack.path = '';

const tabNavigator = createBottomTabNavigator({
  
  ScheduleStack,
  ArtistsStack,
  FavoriteStack,
  AboutStack,
  
 
  
  
  
  
  
},
{
tabBarOptions: {
  activeTintColor: '#e07204',
  activeBackgroundColor : "#e07204",
  inactiveTintColor : "#e07204",
  tabStyle : {
    backgroundColor:"#0a0a09"

  }
}});

tabNavigator.path = '';





export default tabNavigator;
