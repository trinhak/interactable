/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import ChangePosition from './src/position';
import app from './src/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => app);
