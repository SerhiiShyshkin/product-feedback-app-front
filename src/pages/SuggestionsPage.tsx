import { Link } from "react-router-dom";

const SuggetionsPage = () => {
  return (
    <div>
      <h1>Suggestions Page</h1>
      <Link to="/new">new</Link>
      <br />
      <Link to="/detail">detail</Link>
      <br />
      <Link to="/roadmap">roadmap</Link>
    </div>
  );
};

export { SuggetionsPage };
