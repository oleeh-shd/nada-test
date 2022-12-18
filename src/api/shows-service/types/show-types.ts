export type Show = {
  id: number;
  name: string;
  summary: string;
  genres: string[];
  status: string;
  network: Network;
  schedule: Schedule;
  rating: Rating;
  image: Image;
};

export type Schedule = {
  days: string[];
  time: string;
};

export type Image = {
  medium: string;
  original: string;
};

type Rating = {
  average: number | null;
};

export type Network = {
  country: { name: string; code: string; timezone: string };
  id: number;
  name: string;
  officialSite: string;
};
