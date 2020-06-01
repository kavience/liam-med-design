import { addons } from '@storybook/addons';
import theme from './theme';

addons.loadAddons('@storybook/addon-storysource/register');
addons.setConfig({
  theme,
});
