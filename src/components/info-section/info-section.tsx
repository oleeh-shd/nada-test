import { FC } from 'react';
import { Show } from '../../api/shows-service/types/show-types';
import { ListTypes } from '../../utils/enums/list-enums';
import { ShowInfo } from '../../utils/normalize-info/normalize-info';
import { List } from '../list/list';
import styles from './info-section.module.scss';

type ShowInfoProps = {
  show: Show;
  cast: ShowInfo[];
  showInfo: ShowInfo[];
};

export const InfoSection: FC<ShowInfoProps> = ({ cast, showInfo }) => {
  return (
    <section className={styles.wrapper}>
      <List title={'Show Info'} info={showInfo} />
      <List title={'Starring'} info={cast} type={ListTypes.STARRING} />
    </section>
  );
};
