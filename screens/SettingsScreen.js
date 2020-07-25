import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen() {
  return <ExpoConfigView />;
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
  headerStyle: {
    backgroundColor: '#1e222d',
  },
  headerTitleStyle: {
      color: 'white'
  }
};
