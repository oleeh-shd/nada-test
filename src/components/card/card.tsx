import Image from 'next/image';
import { FC } from 'react';
import { Show } from '../../api/show-requests/types/show-types';
import useIsTablet from '../../hooks/useIsTablet';
import { StarRating, StarRatingSizes } from '../star-rating/star-rating';
import styles from './card.module.scss';

type Props = Pick<Show, 'image' | 'rating' | 'summary'>;

export const removeHtml = /(<([^>]+)>)/gi;

export const Card: FC<Props> = ({ image, rating, summary }) => {
  const isTablet = useIsTablet();
  return (
    <div className={styles.card}>
      <Image
        src={image ? image?.medium : '/png/default.png'}
        alt="preview"
        width={isTablet ? 160 : 250}
        height={isTablet ? 160 : 250}
      />
      <div className={styles.cardBottom}>
        <StarRating rating={rating} size={StarRatingSizes.SMALL} />
        <span className={styles.description}>{summary?.replace(removeHtml, '')}</span>
      </div>
    </div>
  );
};
