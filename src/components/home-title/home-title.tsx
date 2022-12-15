import { FC } from 'react';
import styles from './home-title.module.scss';

export const HomeTitle: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>TV bland</h1>
      <span className={styles.description}>
        TV show and series database.
        <br /> Create personalised schedules. Episodes guide, cast, crew and character information.
      </span>
    </div>
  );
};
