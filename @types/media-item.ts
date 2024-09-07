export interface MediaItem {
  id: number;
  name: string;
  alternativeName: string | null;
  enName: string | null;
  type: string;
  typeNumber: number;
  year: number;
  description: string | null;
  shortDescription: string | null;
  slogan: string | null;
  status: string | null;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number | null;
  };
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number | null;
  };
  movieLength: number | null;
  totalSeriesLength: number | null;
  seriesLength: number | null;
  ratingMpaa: string | null;
  ageRating: string | null;
  poster: {
    url: string;
    previewUrl: string;
  };
  genres: Array<{
    name: string;
  }>;
  countries: Array<{
    name: string;
  }>;
  persons: Array<{
    id: number;
    photo: string;
    name: string;
    enName: string | null;
    description: string | null;
    profession: string;
    enProfession: string;
  }>;
  premiere: {
    world: Date | null;
    russia: Date | null;
    digital: Date | null;
    cinema: Date | null;
    bluray: Date | null;
    dvd: Date | null;
  };
  top10: boolean | null;
  top250: boolean | null;
  isSeries: boolean;
  ticketsOnSale: boolean;
  lists: Array<any>;
  networks: {
    items: Array<{
      name: string;
    }>;
  };
  createdAt: Date;
  updatedAt: Date;
}
