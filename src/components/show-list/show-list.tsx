import { FC } from 'react';
import { Card } from '../card/card';
import styles from './show-list.module.scss';

export const ShowList: FC = () => {
  const list = Array(28).fill(1);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Last Added Shows</h2>
      <div className={styles.list}>
        {list.map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};
