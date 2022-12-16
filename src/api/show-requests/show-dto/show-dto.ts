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

type Schedule = {
  days: string[];
  time: string;
};

type Image = {
  medium: string;
  original: string;
};

type Rating = {
  average: number | null;
};

type Network = {
  country: { name: string; code: string; timezone: string };
  id: number;
  name: string;
  officialSite: string;
};
