import Image from 'next/image';
import { FC } from 'react';
import { ListTypes, ShowInfo } from '../info-section/info-section';
import styles from './list.module.scss';

type Props = {
  title: string;
  info: ShowInfo[];
  type?: ListTypes;
};

export const List: FC<Props> = ({ title, info, type = ListTypes.INFO }) => {
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
                  <Image
                    src={image ? image : '/icons/default-avatar.png'}
                    alt={'avatar'}
                    width={40}
                    height={40}
                  />
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
