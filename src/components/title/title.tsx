import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './title.module.scss';

type Props = {
  home?: boolean;
};

export const Title: FC<Props> = ({ home }) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      {router.pathname !== '/' && (
        <Link href={'/'}>
          <span>home</span>
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
