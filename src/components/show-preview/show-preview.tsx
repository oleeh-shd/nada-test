import Image from 'next/image';
import { FC } from 'react';
import { Show } from '../../api/show-requests/types/show-types';
import { removeHtml } from '../card/card';
import { StarRating, StarRatingSizes } from '../star-rating/star-rating';
import styles from './show-preview.module.scss';

type Props = Pick<Show, 'name' | 'image' | 'rating' | 'summary'>;

export const ShowPreview: FC<Props> = ({ name, image, rating, summary }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={image?.original} alt={name} width={350} height={450} />
      <div className={styles.descriptionWrapper}>
        <div className={styles.ratingWrapper}>
          <StarRating rating={rating} size={StarRatingSizes.LARGE} />
          <span className={styles.rating}>
            {rating?.average ? rating?.average?.toString() : 0}/5
          </span>
        </div>
        <h1 className={styles.title}>{name}</h1>
        <span className={styles.description}>{summary?.replace(removeHtml, '')}</span>
      </div>
    </div>
  );
};
