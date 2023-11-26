import { FC } from 'react';

const Logo: FC = (): React.JSX.Element => (
  <>
    <div className="logo">
      <div className="logo__title">
        🌌 <strong>List of StarTrek episodes</strong>
      </div>
      <div className="logo__author">
        work for react-2023-q4 course by{' '}
        <a href="https://app.rs.school/profile?githubId=nikolai-minkevich">
          Nikolai Minkevich
        </a>
        , powered by <a href="https://stapi.co">STAPI</a>
      </div>
    </div>
  </>
);

export default Logo;
