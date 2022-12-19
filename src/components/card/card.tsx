import Image from 'next/image';
import { FC } from 'react';
import { Show } from '../../api/shows-service/types/show-types';
import { StarRatingSizes } from '../../utils/enums/star-rating-enums';
import { removeHtml } from '../../utils/remove-html';
import { StarRating } from '../star-rating/star-rating';
import styles from './card.module.scss';

type CardProps = Pick<Show, 'name' | 'image' | 'rating' | 'summary'>;

export const Card: FC<CardProps> = ({ name, image, rating, summary }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image?.medium || '/png/default.png'} alt={name} fill />
      </div>

      <div className={styles.cardBottom}>
        <StarRating rating={rating} size={StarRatingSizes.SMALL} />
        <span className={styles.description}>{summary?.replace(removeHtml, '')}</span>
      </div>
    </div>
  );
};
