import {create} from '@storybook/theming/create'
import theme from '../src/styles/theme'

import _LOGO from '../public/static/logo.png'

export default create({
  base: 'light',

  colorPrimary: theme.colors.primary500,
  colorSecondary: theme.colors.pink500,

  // UI
  appBg: theme.colors.white,
  appBorderColor: theme.colors.primary200,

  // Typography
  fontBase: theme.fonts.body,

  // Text colors
  textColor: theme.colors.black,

  // Toolbar default and active colors
  barTextColor: theme.colors.grey500,

  inputTextColor: theme.colors.black,

  brandTitle: 'Perfect Product Finder',
  brandUrl: '/',
  // brandImage: _LOGO,
})
