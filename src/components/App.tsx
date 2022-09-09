import { Routes, Route } from 'react-router-dom';

import { SuggetionsPage } from '../pages/SuggestionsPage';
import { RoadmapPage } from '../pages/RoadmapPage';
import { FeedbackDetailPage } from '../pages/FeedbackDetailPage';
import { NewFeedbackPage } from '../pages/NewFeedbackPage';
import { EditFeedbackPage } from '../pages/EditFeedbackPage';

import { Layout } from './Layout';

import { Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'info.bg', width: '100vw', height: '100vh' }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<SuggetionsPage />} />
          <Route path='detail' element={<FeedbackDetailPage />} />
          <Route path='new' element={<NewFeedbackPage />} />
          <Route path='edit' element={<EditFeedbackPage />} />
          <Route path='roadmap' element={<RoadmapPage />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
