import Link from 'next/link';
import { FC } from 'react';
import { Show } from '../../api/show-requests/types/show-types';
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
        <Link key={id} href={`/show/${id}`}>
          <Card image={image} summary={summary} rating={rating} />
        </Link>
      ))}
    </div>
  </div>
);
