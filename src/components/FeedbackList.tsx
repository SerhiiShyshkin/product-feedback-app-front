import { Box, styled, Typography } from '@mui/material';
import { useAppSelector } from '../hook';
import { useGetFeedbackWithFilterQuery } from '../hooks/useGetFeedbackWithFilterQuery';
import { FeedbackItem } from './FeedbackItem';
import { ContentBox } from './ui-components';
import EmptyImg from '../assets/suggestions/illustration-empty.svg';

const FeedbackListBox = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(6),
  display: 'grid',
  maxWidth: '688px',
  margin: 'auto',
  rowGap: theme.spacing(4),
}));

const EmptyBox = styled(ContentBox)(({ theme }) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: theme.spacing(18, 6),
}));

const EmptyImage = styled('img')(({ theme }) => ({}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginTop: theme.spacing(10),
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  textAlign: 'center',
  marginTop: theme.spacing(4),
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
      {feedbacks && feedbacks.length === 0 ? (
        <EmptyBox variant='normal'>
          <EmptyImage src={EmptyImg} alt='Empty img' />
          <Title variant='h1'>There is no feedback yet.</Title>
          <Description variant='description'>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </Description>
        </EmptyBox>
      ) : (
        feedbacks &&
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
        )
      )}
    </FeedbackListBox>
  );
};
