import Link from 'next/link';
import { FC, useState } from 'react';
import { Show } from '../../api/shows-service/types/show-types';
import { Card } from '../card/card';

import styles from './show-list.module.scss';

type Props = {
  showList: Show[];
};

export const ShowList: FC<Props> = ({ showList }) => {
  const [itemsToShow, setItemsToShow] = useState(8);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Last Added Shows</h2>
      <div className={styles.list}>
        {showList.slice(0, itemsToShow).map(({ id, image, summary, rating }) => (
          <Link key={id} href={`/show/${id}`}>
            <Card image={image} summary={summary} rating={rating} />
          </Link>
        ))}
      </div>
      {itemsToShow < showList.length && (
        <button className={styles.more} onClick={() => setItemsToShow((prev) => prev + 8)}>
          show more
        </button>
      )}
    </div>
  );
};
