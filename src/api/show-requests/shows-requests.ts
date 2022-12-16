import { axiosInstance } from '../../axios';
import { Show } from './show-dto/show-dto';

export type GetAllShowResponse = {
  show: Show;
}[];

export const getAllShow = () => {
  return axiosInstance.get<GetAllShowResponse>('schedule?country=GB');
};
