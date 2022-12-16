import { FC } from 'react';
import { Show } from '../../api/show-requests/show-dto/show-dto';
import { Card } from '../card/card';

import styles from './show-list.module.scss';

type Props = {
  showList: Show[];
};

export const ShowList: FC<Props> = ({ showList }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>Last Added Shows</h2>
    <div className={styles.list}>
      {showList.map(({ id, image, summary, rating }) => (
        <Card key={id} image={image} summary={summary} rating={rating} />
      ))}
    </div>
  </div>
);
