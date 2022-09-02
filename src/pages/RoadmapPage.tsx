import { Link } from "react-router-dom";

const RoadmapPage = () => {
  return (
    <div>
      <h1>Roadmap Page</h1>
      <Link to="/">home</Link>
      <br />
      <Link to="/new">new</Link>
      <br />
      <Link to="/detail">details</Link>
    </div>
  );
};

export { RoadmapPage };
