import { FC } from 'react';
import styles from './unknown-page.module.css';

export const UnknownPage: FC = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Page not found</h2>
    </div>
  );
};
