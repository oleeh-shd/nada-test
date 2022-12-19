import { axiosInstance } from '../axios-instance';
import { Cast } from './types/cast-types';
import { Show } from './types/show-types';

type GetAllShowsResponse = {
  show: Show;
};

type GetShowByIdResponse = GetAllShowsResponse['show'];

type GetCastResponse = Cast[];

export class ShowsService {
  constructor() {}
  static getAllShows = async () => {
    return axiosInstance.get<GetAllShowsResponse[]>('schedule?country=US');
  };

  static getShowById = async (id: number) => {
    return axiosInstance.get<GetShowByIdResponse>(`shows/${id}`);
  };

  static getCastByShowId = (id: number) => {
    return axiosInstance.get<GetCastResponse>(`shows/${id}/cast`);
  };
}
