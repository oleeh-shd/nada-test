import { Network, Schedule, Show } from '../../api/shows-service/types/show-types';

export type ShowInfo = {
  key: string;
  value: string | string[] | Schedule | Network | null;
  image?: string | null;
};

export const normalizeInfo = (show: Show): ShowInfo[] => {
  const { genres, status, schedule, network } = show;

  return Object.entries({ genres, status, schedule, network }).map(([key, value]) => {
    if (key === 'schedule') {
      return {
        key,
        value: (value as Schedule)?.days.map((day) => day.substring(0, 3)).join(' ') || null,
      };
    }

    if (key === 'network') {
      return {
        key: 'Streamed on',
        value: (value as Network)?.name || null,
      };
    }

    if (key === 'genres') {
      return {
        key,
        value: (value as string[])?.join(' ') || null,
      };
    }
    return {
      key,
      value: value || null,
    };
  });
};
