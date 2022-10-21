import { styled } from '@mui/material';
import { Header } from '../components/Header';
import { Drawer } from '../components/Drawer';
import { Sidebar } from '../components/Sidebar';
import { CategoriesBoard } from '../components/CategoriesBoard';
import { FeedbackList } from '../components/FeedbackList';

const MainBox = styled('div')(({ theme }) => ({
  position: 'relative',
}));

const SuggetionsPage: React.FC = () => {
  return (
    <>
      <Header />
      <MainBox>
        <Drawer>
          <Sidebar>
            <CategoriesBoard />
          </Sidebar>
        </Drawer>
        <FeedbackList />
      </MainBox>
    </>
  );
};

export { SuggetionsPage };
