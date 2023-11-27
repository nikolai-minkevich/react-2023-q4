import { FC, useState } from 'react';
import styles from './ThrowError.module.css';

type TThrowErrorState = boolean;

const ThrowError: FC = (): React.JSX.Element => {
  const [showErrorElement, setShowErrorElement] =
    useState<TThrowErrorState>(false);

  const handleClick = (): void => setShowErrorElement(true);

  // type 'any' here is only for demonstrate how ErrorBoundary will handle an error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const test: any = {};

  if (showErrorElement) {
    return <div>{test.data.test}</div>;
  }
  return (
    <div className={styles.throwError}>
      <button className={styles.throwError__button} onClick={handleClick}>
        Throw an error
      </button>
    </div>
  );
};

export default ThrowError;
