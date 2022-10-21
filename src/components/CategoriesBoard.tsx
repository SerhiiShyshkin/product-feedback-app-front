import { styled, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hook';
import { resetActive, setActive, useGetCategoriesQuery } from '../store';
import { ContentBox, InteractiveChip } from './ui-components';

const CategoriesBoardBox = styled(ContentBox)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: theme.spacing(2),
  rowGap: theme.spacing(4),
}));

export const CategoriesBoard = () => {
  const currentCategories = useAppSelector((state) => state.category);

  

  const { data: categories, isLoading } = useGetCategoriesQuery();
  const dispatch = useAppDispatch();

  

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <CategoriesBoardBox variant='normal'>
      <InteractiveChip
        variant={currentCategories.length === 0 ? 'active' : 'normal'}
        onClick={() => dispatch(resetActive())}
      >
        <Typography variant='body2'>All</Typography>
      </InteractiveChip>
      {categories &&
        categories.map(({ id, name, description }) => {
          return (
            <InteractiveChip
              key={id}
              variant={
                currentCategories.find((category) => category.id === id)
                  ? 'active'
                  : 'normal'
              }
              onClick={() => dispatch(setActive({ id, name, description }))}
            >
              <Typography variant='body2'>{description}</Typography>
            </InteractiveChip>
          );
        })}
    </CategoriesBoardBox>
  );
};
