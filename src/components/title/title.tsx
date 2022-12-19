import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './title.module.scss';

type TitleProps = {
  home?: boolean;
};

export const Title: FC<TitleProps> = ({ home }) => {
  return (
    <div className={styles.wrapper}>
      {!home && (
        <Link href={'/'}>
          <div className={styles.back}>
            <Image src={'/icons/back-arrow.png'} alt="back" width={30} height={30} />
          </div>
        </Link>
      )}
      <h1 className={styles.title}>TV bland</h1>
      {home && (
        <span className={styles.description}>
          TV show and series database.
          <br /> Create personalised schedules. Episodes guide, cast, crew and character
          information.
        </span>
      )}
    </div>
  );
};
