export interface PeopleParams {
  page?: number;
  search?: string;
  attribute?: PersonKeys;
}

export interface PeoplePage {
  count: number;
  previous: string | null;
  next: string | null;
  results: Person[];
}

export interface Person {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export type PersonKeys = keyof Person;
