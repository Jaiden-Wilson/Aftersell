import { Breakpoints } from '../styled';
import space from './space';

const theme = {
  colors: {
    primary100: '#F7F5FE',
    primary200: '#F4F2FB',
    primary500: '#6138FE',
    pink500: '#F087B3',
    transparent: 'rgba(255, 255, 255, 0);',
    white: '#ffffff',
    grey100: '#FEFEFE',
    grey500: '#76777C',
    grey600: '#65666B',
    black: '#18191F',
  },
  fontWeights: {
    thin: 250,
    regular: 400,
    medium: 600,
    bold: 700,
    extraBold: 900,
  },
  fonts: {
    heading: `'Nuvo pro', serif`,
    body: `'Bitter', serif`,
  },
  fontSizes: {
    1.25: space['1.25'],
    1.5: space['1.5'],
    1.75: space['1.75'],
    2: space['2'],
    2.25: space['2.25'],
    2.5: space['2.5'],
    3: space['3'],
    4: space['4'],
    5: space['5'],
    6: space['6'],
    7: space['7'],
    8: space['8'],
    10: space['9'],
    20: space['20'],
    root: space['2'],
    heading: space['7'],
  },
  lineHeights: {
    normal: 1,
    medium: 1.2,
    high: 1.5,
  },
  space: {
    ...space,
  },
  sizes: {
    maxWidth: 1200,
  },
  breakpoints: ['768px', '992px', '1024px', '1280px'] as Breakpoints,
  zIndices: {
    hide: -1,
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  radii: {
    none: '0',
    sm: '8px',
    md: '16px',
    lg: '32px',
    full: '9999px',
  },
  borders: {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
  },
  shadows: {
    xs:
      '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    sm:
      '0px 10px 20px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    md:
      '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);',
    lg: '0px 0px 100px rgba(0, 0, 0, 0.15)',
    none: 'none',
  },
};

theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];
theme.breakpoints.xl = theme.breakpoints[3];

theme.breakpoints.maxXs = '767px';
theme.breakpoints.maxSm = '991px';

export default theme;
