import { styled, Typography } from '@mui/material';
import { ContentBox } from './ui-components';
import { InteractiveChip } from './ui-components';
import ArrowUp from '../assets/shared/icon-arrow-up.svg';
import CommentsImg from '../assets/shared/icon-comments.svg';

type FeedbackItemProps = {
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments: number;
};

const FeedbackItemBox = styled(ContentBox)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  justifyItems: 'start',
  rowGap: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  gridColumn: '1/3',
  color: theme.palette.primary.main,
}));

const Description = styled(Typography)(({ theme }) => ({
  gridColumn: '1/3',
  color: theme.palette.primary.light,
}));

const CategoryChip = styled(InteractiveChip)(({ theme }) => ({
  gridColumn: '1/3',
}));

const UpvotesChip = styled(InteractiveChip)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(3),
  color: theme.palette.primary.main,
  columnGap: theme.spacing(2.5),
  padding: theme.spacing(1.7, 4),
}));

const Comments = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(3),
  color: theme.palette.primary.main,
  columnGap: theme.spacing(2),
  padding: theme.spacing(1.7, 4),
}));

export const FeedbackItem: React.FC<FeedbackItemProps> = ({
  title,
  description,
  category,
  upvotes,
  comments = 0,
}) => {


    
  return (
    <FeedbackItemBox variant='normal'>
      <Title variant='h4'>{title}</Title>
      <Description variant='description'>{description}</Description>

      <CategoryChip variant='normal'>
        <Typography variant='body2'>{category}</Typography>
      </CategoryChip>

      <UpvotesChip variant='normal'>
        <img src={ArrowUp} alt={'Open icon'} />
        <Typography variant='h4'>{upvotes}</Typography>
      </UpvotesChip>

      <Comments>
        <img src={CommentsImg} alt={'Open icon'} />
        <Typography variant='h4'>{comments}</Typography>
      </Comments>
    </FeedbackItemBox>
  );
};
