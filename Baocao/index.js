import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import {Welcome,Login,Register,MobileList,ProductGridView,Settings} from './screens';
import App from './navigation/App'
import UITab from './navigation/UITab';

AppRegistry.registerComponent(appName, () => () => <App />);