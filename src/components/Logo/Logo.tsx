import { FC } from 'react';
import styles from './Logo.module.css';

const Logo: FC = (): React.JSX.Element => (
  <>
    <div className={styles.logo}>
      <div className={styles.logo__title}>
        🌌 <strong>List of StarTrek episodes</strong>
      </div>
      <div className={styles.logo__author}>
        work for react-2023-q4 course by{' '}
        <a
          className={styles.link}
          href="https://app.rs.school/profile?githubId=nikolai-minkevich"
        >
          Nikolai Minkevich
        </a>
        , powered by{' '}
        <a className={styles.link} href="https://stapi.co">
          STAPI
        </a>
      </div>
    </div>
  </>
);

export default Logo;
