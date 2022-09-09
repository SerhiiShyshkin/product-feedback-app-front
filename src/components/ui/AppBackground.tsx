import { styled } from '@mui/system';

export const AppBackground = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.info.bg,
  width: '100vw',
  height: '100vh'
}));
