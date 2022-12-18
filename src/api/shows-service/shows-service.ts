import { axiosInstance } from '../../axios';
import { Cast } from './types/cast-types';
import { Show } from './types/show-types';

export type GetShowResponse = {
  show: Show;
};

export type GetCastResponse = {
  cast: Cast[];
};

export class ShowsService {
  constructor() {}
  static getAllShows = async () => {
    return axiosInstance.get<GetShowResponse[]>('schedule?country=US');
  };

  static getShowById = async (id: number) => {
    return axiosInstance.get<GetShowResponse>(`shows/${id}`);
  };

  static getCastByShowId = (id: number) => {
    return axiosInstance.get<GetCastResponse>(`shows/${id}/cast`);
  };
}
