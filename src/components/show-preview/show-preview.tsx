import Image from 'next/image';
import { FC } from 'react';
import { Show } from '../../api/shows-service/types/show-types';
import { removeHtml } from '../card/card';
import useIsTablet from '../../hooks/useIsTablet';
import { StarRating, StarRatingSizes } from '../star-rating/star-rating';
import styles from './show-preview.module.scss';

type Props = Pick<Show, 'name' | 'image' | 'rating' | 'summary'>;

export const ShowPreview: FC<Props> = ({ name, image, rating, summary }) => {
  const isTablet = useIsTablet();
  return (
    <div className={styles.wrapper}>
      <Image
        src={image?.original}
        alt={name}
        width={isTablet ? 300 : 350}
        height={isTablet ? 350 : 450}
      />
      <div className={styles.descriptionWrapper}>
        <div className={styles.ratingWrapper}>
          <StarRating rating={rating} size={StarRatingSizes.LARGE} />
          <span className={styles.rating}>
            {rating?.average ? rating?.average?.toString() : 0}/10
          </span>
        </div>
        <h1 className={styles.title}>{name}</h1>
        <span className={styles.description}>{summary?.replace(removeHtml, '')}</span>
      </div>
    </div>
  );
};
