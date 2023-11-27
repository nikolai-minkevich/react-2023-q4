import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = (): React.JSX.Element => (
  <>
    <div className="not-found" aria-label="not found">
      <h2>404 - Not Found</h2>
      <div>
        <Link to="/">Back to main</Link>
      </div>
    </div>
  </>
);

export default NotFound;
