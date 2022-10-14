import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { Header } from '../components/Header';
import { Drawer } from '../components/Drawer';

import { Sidebar } from '../components/Sidebar';
import { CategoriesBoard } from '../components/CategoriesBoard';
import { InteractiveChip } from '../components/ui-components';

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
            <CategoriesBoard>
              <InteractiveChip variant='normal'>
                <Typography variant='body2'>All</Typography>
              </InteractiveChip>
              <InteractiveChip variant='active'>
                <Typography variant='body2'>UI</Typography>
              </InteractiveChip>
              <InteractiveChip variant='normal'>
                <Typography variant='body2'>UX</Typography>
              </InteractiveChip>
              <InteractiveChip variant='normal'>
                <Typography variant='body2'>Enhancement</Typography>
              </InteractiveChip>
              <InteractiveChip variant='normal'>
                <Typography variant='body2'>Bug</Typography>
              </InteractiveChip>
              <InteractiveChip variant='normal'>
                <Typography variant='body2'>Feature</Typography>
              </InteractiveChip>
            </CategoriesBoard>
            <CategoriesBoard>
              <InteractiveChip variant='normal'>
                <Typography variant='body2'>All</Typography>
              </InteractiveChip>
              <InteractiveChip variant='active'>
                <Typography variant='body2'>UI</Typography>
              </InteractiveChip>
              <InteractiveChip variant='normal'>
                <Typography variant='body2'>UX</Typography>
              </InteractiveChip>
              <InteractiveChip variant='normal'>
                <Typography variant='body2'>Enhancement</Typography>
              </InteractiveChip>
              <InteractiveChip variant='normal'>
                <Typography variant='body2'>Bug</Typography>
              </InteractiveChip>
              <InteractiveChip variant='normal'>
                <Typography variant='body2'>Feature</Typography>
              </InteractiveChip>
            </CategoriesBoard>
          </Sidebar>
        </Drawer>
        <Box>test div</Box>
      </MainBox>
    </>
  );
};

export { SuggetionsPage };
