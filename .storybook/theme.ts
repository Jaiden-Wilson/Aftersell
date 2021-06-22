import {create} from '@storybook/theming/create'
import theme from '../src/styles/theme'

import _LOGO from '../public/static/logo.png'

export default create({
  base: 'light',

  colorPrimary: theme.colors.cashew,
  colorSecondary: theme.colors.tiger,

  // UI
  appBg: theme.colors.white,
  appBorderColor: theme.colors.banana,

  // Typography
  fontBase: theme.fonts.body,

  // Text colors
  textColor: theme.colors.black,

  // Toolbar default and active colors
  barTextColor: theme.colors.lapiz,

  inputTextColor: theme.colors.black,

  brandTitle: 'Perfect Product Finder',
  brandUrl: '/',
  // brandImage: _LOGO,
})
