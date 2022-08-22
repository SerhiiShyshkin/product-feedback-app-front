import { createTheme } from '@mui/material';

const theme = createTheme({});

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
}

theme.breakpoints.values = {
  mobile: 327,
  tablet: 689,
  desktop: 1110,
};

export { theme };
