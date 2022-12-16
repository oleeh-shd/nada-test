import { axiosInstance } from '../../axios';
import { Cast } from './types/cast-types';
import { Show } from './types/show-types';

export type GetShowResponse = {
  show: Show;
};

export type GetCastResponse = {
  cast: Cast[];
};

export const getAllShow = () => {
  return axiosInstance.get<GetShowResponse[]>('schedule?country=GB');
};

export const getShowById = (id: number) => {
  return axiosInstance.get<GetShowResponse>(`shows/${id}`);
};

export const getCastByShowId = (id: number) => {
  return axiosInstance.get<GetCastResponse>(`shows/${id}/cast`);
};
