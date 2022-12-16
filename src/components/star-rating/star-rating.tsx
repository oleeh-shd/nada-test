import Image from 'next/image';
import { FC } from 'react';
import { Show } from '../../api/show-requests/show-dto/show-dto';

enum StarStates {
  EMPTY = 'clear',
  HALF = 'half',
  FULL = 'full',
}

type Props = Pick<Show, 'rating'>;

const createRating = (rating: number) => {
  const rates = Array.from({ length: 5 }, (_, i) => i + 1);
  const int = Math.floor(rating);
  const decimal = rating - int;

  return rates.map((item) =>
    int >= item
      ? StarStates.FULL
      : decimal && item - 1 + decimal === rating
      ? StarStates.HALF
      : StarStates.EMPTY,
  );
};

export const StarRating: FC<Props> = ({ rating }) => (
  <div>
    {createRating(rating.average || 0).map((state, i) => (
      <Image key={i} src={`/icons/star-${state}.svg`} alt={state} width={20} height={20} />
    ))}
  </div>
);
