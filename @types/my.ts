export interface MyMedia {
  id: number;
  userId: number;
  mediaId: number;
  name: string;
  previewUrl: string;
  year: number;
  movieLength: number | null;
  seriesLength: number | null;
  ratingKp: number;
}
