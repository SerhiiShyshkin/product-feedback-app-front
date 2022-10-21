import { Box, styled } from '@mui/material';
import { useAppSelector } from '../hook';
import { useGetFeedbackWithFilterQuery } from '../hooks/useGetFeedbackWithFilterQuery';
import { FeedbackItem } from './FeedbackItem';

const FeedbackListBox = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(6),
  display: 'grid',
  maxWidth: '688px',
  margin: 'auto',
  rowGap: theme.spacing(4),
}));

export const FeedbackList = () => {
  const currentCategories = useAppSelector((state) => state.category);

  const filters = [
    { key: 'status', value: 'suggestion' },
    { key: 'category', value: currentCategories },
  ];

  const { data: feedbacks, isLoading } = useGetFeedbackWithFilterQuery(filters);

  if (isLoading) return <Box>Loading....</Box>;
  return (
    <FeedbackListBox>
      {feedbacks &&
        feedbacks.map(
          (
            { id, title, description, category, upvotes, comments },
            index,
            array
          ) => {
            return (
              <FeedbackItem
                key={id}
                title={title}
                description={description}
                category={category}
                upvotes={upvotes}
                comments={comments && comments.length}
              />
            );
          }
        )}
    </FeedbackListBox>
  );
};
