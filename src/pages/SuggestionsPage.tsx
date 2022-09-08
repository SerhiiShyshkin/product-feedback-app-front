import { Link } from 'react-router-dom';
import HeaderBox from '../components/ui/ContentBox';

const SuggetionsPage: React.FC = () => {
  return (
    <div>
      <h1>Suggestions Page</h1>
      <Link to='/new'>new</Link>
      <br />
      <Link to='/detail'>detail</Link>
      <br />
      <Link to='/roadmap'>roadmap</Link>

      <HeaderBox variant='normal' sx={{ height: '50px', width: '100px' }}>
        hello
      </HeaderBox>
    </div>
  );
};

export { SuggetionsPage };
