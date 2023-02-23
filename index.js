/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppWrapper from './AppWrapper';
import {name as appName} from './app.json';
import i18n from './i18n';
AppRegistry.registerComponent(appName, () => AppWrapper);
