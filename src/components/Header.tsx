import { Typography, useTheme, useMediaQuery } from '@mui/material';
import { ContentBox } from './ui-components';
import { HamburgerButton } from './HamburgerButton';
import { styled } from '@mui/system';

const HeaderBox = styled(ContentBox)(({ theme }) => ({
  padding: theme.spacing(1),
  color: 'white',

  [theme.breakpoints.up('tablet')]: {
    color: 'blue',
  },
  [theme.breakpoints.up('desktop')]: {
    color: 'red',
  },
}));

export const Header: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <HeaderBox variant='header'>
      <Typography sx={{ typography: 'h2' }}>Frontend Mentor</Typography>
      <Typography sx={{ opacity: 0.75 }}>Feedback Board</Typography>
      {matches && <HamburgerButton />}
    </HeaderBox>
  );
};
