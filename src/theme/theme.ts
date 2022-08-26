import { createTheme } from '@mui/material';

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
      main: '##3A4374',
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
});

theme.palette.background.default = theme.palette.info.bg;

export { theme };
