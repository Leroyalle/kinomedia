export interface MediaDTO {
  docs: MovieDTO[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface MovieDTO {
  id: number;
  name: string;
  alternativeName?: string | null;
  enName?: string | null;
  type: 'movie' | 'series' | 'anime' | 'cartoon';
  typeNumber: number;
  year: number;
  description: string;
  shortDescription?: string | null;
  status?: string | null;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  movieLength: number;
  totalSeriesLength?: number | null;
  seriesLength: number | null;
  ratingMpaa?: string | null;
  ageRating: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  backdrop: {
    url: string;
    previewUrl: string;
  };
  genres: Array<{ name: string }>;
  countries: Array<{ name: string }>;
  top10?: boolean | null;
  top250?: boolean | null;
  isSeries: boolean;
  ticketsOnSale: boolean;
}
