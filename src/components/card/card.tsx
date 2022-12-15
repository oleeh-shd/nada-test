import { FC } from 'react';
import { StarRating } from '../star-rating/star-rating';
import styles from './card.module.scss';

export const Card: FC = () => {
  return (
    <div className={styles.card}>
      <StarRating rating={3} />
    </div>
  );
};
