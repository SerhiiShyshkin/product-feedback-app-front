import { styled } from '@mui/material';
import { ReactNode } from 'react';
import { useAppSelector } from '../hook';

type DrawerProps = {
  children: ReactNode;
};

const DrawerBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  background: theme.palette.common.black,
  opacity: '0.5',
  width: '100%',
  minHeight: '100vh',
}));

const DrawerBox = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'max-content',
  position: 'absolute',
  right: 0,
  padding: '24px',
  minHeight: '100vh',
  background: theme.palette.info.bg,
}));

export const Drawer = ({ children }: DrawerProps) => {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  return (
    <>
      {isOpen && <DrawerBackground />}
      {isOpen && <DrawerBox>{children}</DrawerBox>}
    </>
  );
};
