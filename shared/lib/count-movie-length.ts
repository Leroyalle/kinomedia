/**
 * Функция countMovieLength принимает на вход продолжительность фильма
 * в минутах и возвращает объект с hours и minutes.
 *
 * @param {number | null} length продолжительность фильма в минутах
 * @return {{ hours: number; minutes: number }} объект с hours и minutes
 */

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
