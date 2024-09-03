export const countMovieLength = (length: number): { hours: number; minutes: number } => {
  if (length < 60) {
    return { hours: 0, minutes: length };
  }

  const hours = Math.floor(length / 60);
  const minutes = length % 60;

  return {
    hours,
    minutes,
  };
};
