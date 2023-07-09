import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, ImageScreen, PreviewScreen} from './screens';

export type RootStackParamList = {
  Home: undefined;
  Image: {source: {uri: string}};
  Preview: {source: {uri: string}};
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Image" component={ImageScreen} />
        <RootStack.Screen name="Preview" component={PreviewScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
