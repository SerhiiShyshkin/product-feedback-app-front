import { styled } from '@mui/material';
import { ReactNode } from 'react';
import { useAppSelector } from '../hook';

type SidebarProps = {
  children: ReactNode;
};

const SidebarBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  background: theme.palette.common.black,
  opacity: '0.5',
  width: '100%',
  minHeight: '100vh',
}));

const SidebarDrawer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '271px',
  position: 'absolute',
  right: 0,
  padding: '24px',
  borderRadius: 0,
  width: 'auto',
  height: '100vh',
  minHeight: '100%',
  background: theme.palette.info.bg,
}));

export const Sidebar = ({ children }: SidebarProps) => {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  return (
    <>
      {isOpen ? <SidebarBackground /> : null}
      {isOpen ? <SidebarDrawer>{children}</SidebarDrawer> : null}
    </>
  );
};
