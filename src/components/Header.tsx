import { Typography, useTheme, useMediaQuery } from '@mui/material';
import { ContentBox } from './ui-components';
import { styled } from '@mui/system';
import hamburgerIcon from '../assets/shared/mobile/icon-hamburger.svg';
import closeIcon from '../assets/shared/mobile/icon-close.svg';

const HeaderBox = styled(ContentBox)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',

  [theme.breakpoints.up('tablet')]: {
    color: 'blue',
  },
  [theme.breakpoints.up('desktop')]: {
    color: 'red',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  gridColumn: '1/2',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  gridColumn: '1/2',
}));

const HamburgerButton = styled('img')(({ theme }) => ({
  gridColumn: '2/3',
  gridRow: '1/3',
}));

export const Header: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('mobile'));

  return (
    <HeaderBox variant='header'>
      <Title variant='h3'>Frontend Mentor</Title>
      <Subtitle variant='subtitle' sx={{ opacity: 0.75 }}>
        Feedback Board
      </Subtitle>

      {matches && <HamburgerButton src={hamburgerIcon} alt='Hamburger icon' />}
    </HeaderBox>
  );
};
