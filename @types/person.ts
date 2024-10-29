interface BirthPlace {
  value: string;
}

interface Spouse {
  id: number;
  name: string | null;
  divorced: boolean;
  children: number;
  relation: string;
}

export interface Fact {
  value: string;
}

interface Movie {
  id: number;
  name: string | null;
  alternativeName: string;
  rating: number | null;
  general: boolean;
  description: string | null;
  enProfession: string;
}

export interface PersonDataDTO {
  id: number;
  name: string;
  enName: string;
  photo: string;
  sex: string;
  growth: number;
  birthday: string;
  death: string | null;
  age: number;
  birthPlace: BirthPlace[];
  deathPlace: BirthPlace[];
  spouses: Spouse[];
  countAwards: number;
  profession: string[];
  facts: Fact[];
  movies: Movie[];
  createdAt: string;
  updatedAt: string;
}

export interface PersonData {
  id: number;
  photo: string;
  name: string;
  enName: string | null;
  description: string | null;
  profession: string;
  enProfession: string;
}
