import Image from 'next/image';
import { FC } from 'react';
import { Show } from '../../api/show-requests/show-dto/show-dto';
import { StarRating } from '../star-rating/star-rating';
import styles from './card.module.scss';

type Props = Pick<Show, 'image' | 'rating' | 'summary'>;

const removeHtml = /(<([^>]+)>)/gi;

export const Card: FC<Props> = ({ image, rating, summary }) => {
  return (
    <div className={styles.card}>
      <Image src={image?.medium} alt="preview" width={250} height={250} />
      <div className={styles.cardBottom}>
        <StarRating rating={rating} />
        <span>{summary?.replace(removeHtml, '')}</span>
      </div>
    </div>
  );
};
