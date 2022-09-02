import { Box } from '@mui/material';

import { theme } from '../themes';

const App: React.FC = () => {
  return <Box sx={{ background: theme.palette.info.live }}>hello</Box>;
};

export default App;
