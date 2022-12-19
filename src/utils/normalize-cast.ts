import { Cast } from '../api/shows-service/types/cast-types';
import { ShowInfo } from './normalize-info';

export const nomalizeCast = (cast: Cast[]): ShowInfo[] => {
  return cast.map((item) => ({
    key: item.person?.name,
    value: item.character?.name || null,
    image: item.person?.image?.medium || null,
  }));
};
