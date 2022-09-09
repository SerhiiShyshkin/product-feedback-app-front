import { Typography, useTheme, useMediaQuery } from '@mui/material';
import HeaderBox from './ui/ContentBox';
import { HamburgerButton } from './HamburgerButton';

export const Header: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <HeaderBox variant='header' sx={{ color: 'common.white' }}>
      <Typography sx={{typography: 'h2'}}>Frontend Mentor</Typography>
      <Typography sx={{ opacity: 0.75 }}>Feedback Board</Typography>
      {matches && <HamburgerButton />}
    </HeaderBox>
  );
};
