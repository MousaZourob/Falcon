import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import DashboardScreen from '../screens/DashboardScreen.js';
import ActivityScreen from '../screens/ActivityScreen.js';
import SearchScreen from '../screens/SearchScreen.js';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// Dashboard screen stack
const DashboardStack = createStackNavigator(
  {
    Dashboard: DashboardScreen,
  },
  config
);

DashboardStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-speedometer'}`
          : 'md-speedometer'
      }
    />
  ),
};

DashboardStack.path = '';


// Activity screen stack
const ActivityStack = createStackNavigator(
  {
    Activity: ActivityScreen,
  },
  config
);

ActivityStack.navigationOptions = {
  tabBarLabel: 'Activity',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-pulse'}`
          : 'md-pulse'
      }
    />
  ),
};

ActivityStack.path = '';


// Search screen stack
const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search'}`
          : 'md-search'
      }
    />
  ),
};

SearchStack.path = '';


// Settings screen stack
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


// Bottom tab navigator contents
const tabNavigator = createBottomTabNavigator({
  DashboardStack,
  ActivityStack,
  SearchStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
