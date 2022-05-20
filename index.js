// export { default } from './storybook';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';

let AppRoot = App;

// this is one way to conditionally render storybook, you could get this from a env variable or config file
const LoadStorybook = true;
if (LoadStorybook) {
  const getStorybookUI = require('./storybook').default;
  AppRoot = getStorybookUI();
}

AppRegistry.registerComponent(appName, () => AppRoot);
