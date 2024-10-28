export const countMovieLength = (length: number | null): { hours: number; minutes: number } => {
  if (!length) {
    return { hours: 0, minutes: 0 };
  }
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
