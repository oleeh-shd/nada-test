import Image from 'next/image';
import { FC } from 'react';
import { ListTypes } from '../../utils/enums/list-enums';
import { ShowInfo } from '../../utils/normalize-info';
import styles from './list.module.scss';

type ListProps = {
  title: string;
  info: ShowInfo[];
  type?: ListTypes;
};

export const List: FC<ListProps> = ({ title, info, type = ListTypes.INFO }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      <ul>
        {info.map(({ key, value, image }) => {
          if (!value) return;
          return (
            <li key={key} className={styles.listItem}>
              {type === ListTypes.STARRING && (
                <div className={styles.avatar}>
                  <Image src={image || '/icons/default-avatar.png'} alt={`${key}-avatar`} fill />
                </div>
              )}
              <span className={styles.key}>{key}</span>
              <span className={styles.value}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
