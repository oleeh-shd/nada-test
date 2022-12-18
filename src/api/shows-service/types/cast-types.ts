import { Image } from './show-types';

export type Cast = {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
};

type Person = {
  birthday: string;
  country: Country;
  deathday: string | null;
  gender: string;
  id: number;
  image: Image;
  name: string;
  updated: number;
  url: string;
};

type Character = {
  id: number;
  image: Image;
  name: string;
  url: string;
};

type Country = {
  name: string;
  code: string;
  timezone: string;
};
