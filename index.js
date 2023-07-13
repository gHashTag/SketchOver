/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

LogBox.ignoreLogs([
  'Warning: componentWillMount has been renamed',
  'Warning: componentWillReceiveProps has been renamed',
  'ViewPropTypes will be removed from React Native',
]);

AppRegistry.registerComponent(appName, () => App);
