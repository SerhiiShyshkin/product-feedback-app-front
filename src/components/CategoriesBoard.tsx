import { styled } from '@mui/material';
import { ReactNode } from 'react';
import { ContentBox } from './ui-components';
import { ContentBoxProps } from './ui-components/ContentBox';

type CategoriesBoardProps = {
  children: ReactNode;
};

const CategoriesBoardBox = styled(ContentBox)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: theme.spacing(2),
  rowGap: theme.spacing(4),
}));

export const CategoriesBoard = ({ children }: CategoriesBoardProps) => {
  return <CategoriesBoardBox variant='normal'>{children}</CategoriesBoardBox>;
};
