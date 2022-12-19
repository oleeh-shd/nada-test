import Link from 'next/link';
import { FC, useState } from 'react';
import { Show } from '../../api/shows-service/types/show-types';
import { Card } from '../card/card';

import styles from './show-list.module.scss';

type ShowListProps = {
  showList: Show[];
};

const DEFAULT_ITEMS_TO_SHOW = 10;

export const ShowList: FC<ShowListProps> = ({ showList }) => {
  const [itemsToShow, setItemsToShow] = useState(DEFAULT_ITEMS_TO_SHOW);

  const handleMoreItems = () => setItemsToShow((prev) => prev + DEFAULT_ITEMS_TO_SHOW);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Last Added Shows</h2>
      <div className={styles.list}>
        {showList.slice(0, itemsToShow).map(({ id, image, summary, rating, name }) => (
          <Link key={id} href={`/show/${id}`}>
            <Card image={image} summary={summary} rating={rating} name={name} />
          </Link>
        ))}
      </div>
      {itemsToShow < showList.length && (
        <button className={styles.more} onClick={handleMoreItems}>
          show more
        </button>
      )}
    </div>
  );
};
