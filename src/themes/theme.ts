import { createTheme } from '@mui/material';

import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';

declare module '@mui/material/styles' {
  interface Components {
    [key: string]: any;
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    xl: false;
    lg: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }

  interface TypographyVariants {
    subtitle: React.CSSProperties;
    description: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle?: React.CSSProperties;
    description?: React.CSSProperties;
  }

  interface PaletteColor {
    hover?: string;
    live?: string;
    bg?: string;
  }

  interface SimplePaletteColorOptions {
    hover?: string;
    live?: string;
    bg?: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle: true;
    description: true;
    title: true;
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
    common: {
      white: '#FFF',
      black: '#000',
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
      font: '700 1.125rem/1.626rem Jost',
    },

    h2: {
      font: '700 1rem/1.445rem Jost',
    },

    h3: {
      fontWeight: 700,
      fontSize: '0.938rem',
      lineHeight: '1.355rem',
    },

    h4: {
      font: '700 0.813rem/1.174rem Jost',
    },

    body1: {
      font: '400 1rem/1.174rem Jost',
    },

    body2: {
      font: '600 0.813rem/1.174rem Jost',
    },

    subtitle: {
      fontWeight: 500,
      fontSize: '0.813rem',
      lineHeight: '1.174rem',
    },

    description: {
      font: '400 0.813rem/1.174rem Jost',
    },
  },

  spacing: 4,
});

theme.components = {
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
          variant: 'toolbar',
        },
        style: {
          backgroundColor: theme.palette.primary.dark,
          
          color: theme.palette.common.white,
        },
      },

      {
        props: {
          variant: 'loading',
        },
        style: {
          backgroundColor: theme.palette.info.bg,
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
          //backgroundImage: `url(${headerBackgroundTablet})`,
          borderRadius: '10px',
        },
        [theme.breakpoints.up('desktop')]: {
          //backgroundImage: `url(${headerBackgroundDesktop})`,
        },
      },
      toolbar: {
        [theme.breakpoints.up('tablet')]: {
          borderRadius: '10px',
        },
      },
    },
  },
};

export { theme };
