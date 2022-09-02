import { Link } from "react-router-dom";

const FeedbackDetailPage = () => {
  return (
    <div>
      <h1>Feedback Detail Page</h1>
      <Link to="/">home</Link>
      <br />
      <Link to="/edit">edit</Link>
    </div>
  );
};
export { FeedbackDetailPage };
