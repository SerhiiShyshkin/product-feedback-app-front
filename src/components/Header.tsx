import { Typography, styled, Skeleton, useMediaQuery } from '@mui/material';
import { ContentBox } from './ui-components';
import { BurgerIcon } from './BurgerIcon';
import { useGetHeaderQuery } from '../store';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/system';

const HeaderBox = styled(ContentBox)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
}));

const Title = styled('span')(({ theme }) => ({
  cursor: 'pointer',
}));

const Subtitle = styled('span')(({ theme }) => ({
  opacity: '0.75',
  cursor: 'pointer',
}));

const HamburgerButton = styled('div')(({ theme }) => ({
  display: 'grid',
  gridColumn: '2/3',
  gridRow: '1/3',
}));

export const Header = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const matches = useMediaQuery(
    theme.breakpoints.between(0, theme.breakpoints.values.tablet)
  );

  const { data: settings, isLoading } = useGetHeaderQuery();

  const openIcon = settings && settings.openIcon;
  const closeIcon = settings && settings.closeIcon;
  const bgImage = settings && settings.bgImage;

  const resetApp = () => navigate(0);

  return (
    <HeaderBox
      variant={isLoading ? 'loading' : 'toolbar'}
      bg={isLoading ? undefined : bgImage}
    >
      <Typography variant='h3'>
        {isLoading ? (
          <Skeleton width={150} />
        ) : (
          <Title onClick={resetApp}>{settings && settings.title}</Title>
        )}
      </Typography>
      <Typography variant='subtitle'>
        {isLoading ? (
          <Skeleton width={120} />
        ) : (
          <Subtitle onClick={resetApp}>
            {settings && settings.subtitle}
          </Subtitle>
        )}
      </Typography>
      {matches && (
        <HamburgerButton>
          {isLoading ? (
            <Skeleton>
              <BurgerIcon openIcon={openIcon} closeIcon={closeIcon} />
            </Skeleton>
          ) : (
            <BurgerIcon openIcon={openIcon} closeIcon={closeIcon} />
          )}
        </HamburgerButton>
      )}
    </HeaderBox>
  );
};
