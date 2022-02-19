// if you use expo remove this line

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = () =>
  getStorybookUI({
    onDeviceUI: true,
    disableWebsockets: true,
    // I would recommend actually adding async storage since it adds some nice functionality
    asyncStorage: null,
  });

export default StorybookUIRoot;
