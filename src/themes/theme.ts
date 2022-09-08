import { createTheme } from '@mui/material';
import { createTheme as createThemeSystem } from '@mui/system';

import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';

import headerBackgroundMobile from '../assets/suggestions/mobile/background-header.png';
import headerBackgroundTablet from '../assets/suggestions/tablet/background-header.png';
import headerBackgroundDesktop from '../assets/suggestions/desktop/background-header.png';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }

  interface PaletteColor {
    hover: string;
    live: string;
    bg: string;
  }

  interface SimplePaletteColorOptions {
    hover?: string;
    live?: string;
    bg?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#3A4374',
      dark: '#373F68',
      light: '#647196',
      hover: '#656EA3',
    },
    secondary: {
      main: '#AD1FEA',
      light: '#C75AF6',
    },
    info: {
      dark: '#4661E6',
      hover: '#CFD7FF',
      light: '#F2F4FE',
      main: '#7C91F9',
      live: '#62BCFA',
      bg: '#F7F8FD',
    },
    error: {
      dark: '#D73737',
      main: '#E98888',
      light: '#F49F85',
    },
  },

  breakpoints: {
    values: {
      mobile: 327,
      tablet: 689,
      desktop: 1110,
    },
  },

  typography: {
    fontFamily: 'Jost',
    h1: {
      fontSize: '1.5rem',
      fontWeight: '700',
      lineHeight: '2.188rem',
      letterSpacing: '-0.021rem',
    },

    h2: {
      fontSize: '1.25rem',
      fontWeight: '700',
      lineHeight: '1.813rem',
      letterSpacing: '-0.016rem',
    },

    h3: {
      fontSize: '1.125rem',
      fontWeight: '700',
      lineHeight: '1.625rem',
      letterSpacing: '-0.016rem',
    },

    h4: {
      fontSize: '0.875rem',
      fontWeight: '700',
      lineHeight: '1.25rem',
      letterSpacing: '-0.013rem',
    },

    body1: {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.438rem',
    },

    body2: {
      fontSize: '0.938rem',
      fontWeight: '400',
      lineHeight: '1.375rem',
    },

    caption: {
      fontSize: '0.813rem',
      fontWeight: '600',
      lineHeight: '1.188rem',
    },

    button: {
      fontSize: '0.813rem',
      fontWeight: '700',
      lineHeight: '1.188rem',
    },

    overline: {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.25rem',
    },
  },

  spacing: 4,
});

theme.palette.background.default = theme.palette.info.bg;

const contentBoxTheme = createThemeSystem({
  components: {
    ContentBox: {
      variants: [
        {
          props: {
            variant: 'normal',
          },
          style: {
            backgroundColor: theme.palette.common.white,
          },
        },
        {
          props: {
            variant: 'header',
          },
          style: {
            backgroundImage: `url(${headerBackgroundMobile})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          },
        },
        {
          props: {
            variant: 'toolbar',
          },
          style: {
            backgroundColor: theme.palette.primary.dark,
          },
        },
      ],

      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: theme.spacing(4, 6),
          [theme.breakpoints.up('tablet')]: {
            padding: theme.spacing(6),
          },
        },
        normal: {
          borderRadius: '10px',
        },
        header: {
          [theme.breakpoints.up('tablet')]: {
            backgroundImage: `url(${headerBackgroundTablet})`,
            borderRadius: '10px',
          },
          [theme.breakpoints.up('desktop')]: {
            backgroundImage: `url(${headerBackgroundDesktop})`,
          },
        },
        toolbar: {
          [theme.breakpoints.up('tablet')]: {
            borderRadius: '10px',
          },
        },
      },
    },
  },
});

export { theme, contentBoxTheme };
