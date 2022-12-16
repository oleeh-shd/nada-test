import { axiosInstance } from '../../axios';
import { Show } from './show-dto/show-dto';

export type GetShowResponse = {
  show: Show;
};

export const getAllShow = () => {
  return axiosInstance.get<GetShowResponse[]>('schedule?country=GB');
};

export const getShowById = (id: number) => {
  return axiosInstance.get<GetShowResponse>(`shows/${id}`);
};
