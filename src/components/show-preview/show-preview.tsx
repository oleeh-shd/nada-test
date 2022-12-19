import Image from 'next/image';
import { FC } from 'react';
import { Show } from '../../api/shows-service/types/show-types';
import { StarRating } from '../star-rating/star-rating';
import styles from './show-preview.module.scss';
import { StarRatingSizes } from '../../utils/enums/star-rating-enums';
import { removeHtml } from '../../utils/remove-html';

type ShowPreviewProps = Pick<Show, 'name' | 'image' | 'rating' | 'summary'>;

export const ShowPreview: FC<ShowPreviewProps> = ({ name, image, rating, summary }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={image?.original || '/png/default.png'} alt={name} fill />
      </div>

      <div className={styles.descriptionWrapper}>
        <div className={styles.ratingWrapper}>
          <StarRating rating={rating} size={StarRatingSizes.LARGE} />
          <span className={styles.rating}>{rating?.average?.toString() || 0}/10</span>
        </div>
        <h1 className={styles.title}>{name}</h1>
        <span className={styles.description}>{summary?.replace(removeHtml, '')}</span>
      </div>
    </div>
  );
};
