import { FC } from 'react';
import { Cast } from '../../api/shows-service/types/cast-types';
import { Network, Schedule, Show } from '../../api/shows-service/types/show-types';
import { List } from '../list/list';
import styles from './info-section.module.scss';

type Props = {
  show: Show;
  cast: Cast[];
};

export enum ListTypes {
  INFO = 'info',
  STARRING = 'starring',
}

export type ShowInfo = { key: string; value: string; image?: string };

export const InfoSection: FC<Props> = ({ show, cast }) => {
  const { genres, status, schedule, network } = show;

  const normalizedInfo = Object.entries({ genres, status, schedule, network }).map(
    ([key, value]) => {
      if (!key) return;

      if (key === 'schedule') {
        return {
          key,
          value: (value as Schedule)?.days.map((day) => day.substring(0, 3)).join(' '),
        };
      }

      if (key === 'network') {
        return {
          key: 'Streamed on',
          value: (value as Network)?.name,
        };
      }

      if (key === 'genres') {
        return {
          key,
          value: (value as string[]).join(' '),
        };
      }
      return {
        key,
        value,
      };
    },
  ) as ShowInfo[];

  const normalizedCast = cast.map((item) => {
    return {
      key: item.person?.name,
      value: item.character?.name,
      image: item.person?.image?.medium,
    };
  });

  return (
    <section className={styles.wrapper}>
      <List title={'Show Info'} info={normalizedInfo} />
      <List title={'Starring'} info={normalizedCast} type={ListTypes.STARRING} />
    </section>
  );
};
