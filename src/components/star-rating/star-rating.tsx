import Image from 'next/image';
import { FC } from 'react';

enum StarStates {
  EMPTY = 'clear',
  HALF = 'half',
  FULL = 'full',
}

type Props = {
  rating: number;
};

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

export const StarRating: FC<Props> = ({ rating = 0 }) => {
  return (
    <div>
      {createRating(rating).map((state, i) => (
        <Image key={i} src={`/icons/star-${state}.svg`} alt={state} width={20} height={20} />
      ))}
    </div>
  );
};
