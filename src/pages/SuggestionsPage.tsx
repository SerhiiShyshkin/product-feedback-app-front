import { styled } from '@mui/material';
import { Box } from '@mui/system';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const MainBox = styled('div')(({ theme }) => ({
  position: 'relative',
}));

const SuggetionsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <MainBox>
        <Sidebar>
          <Box sx={{ background: 'red' }}></Box>
        </Sidebar>
        <Box>test div</Box>
      </MainBox>
    </div>
  );
};

export { SuggetionsPage };
