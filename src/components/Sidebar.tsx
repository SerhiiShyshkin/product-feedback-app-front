import { styled } from '@mui/material';
import { ReactNode } from 'react';

type SidebarProps = {
  children: ReactNode;
};

const SidebarBox = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'max-content max-content',
  rowGap: theme.spacing(6),
  maxWidth: '223px',
  maxHeight: 'auto',
}));

export const Sidebar = ({ children }: SidebarProps) => {
  return <SidebarBox>{children}</SidebarBox>;
};
