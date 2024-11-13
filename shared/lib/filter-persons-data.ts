import { PersonData } from '@/@types/person';

/**
 * Функция группирует данные о создателях фильма по профессиям
 *
 * @example filterPersonsData(data)
 *
 * @param data массив с данными о создателях фильма
 *
 * @returns объект с группированными данными
 */

export const filterPersonsData = (data: PersonData[]) => {
  const professions = Array.from(new Set(data.map((item) => item.profession)));
  const groupedActors = professions.reduce(
    (acc, profession) => {
      acc[profession] = data.filter((item) => item.profession === profession);
      return acc;
    },
    {} as Record<string, PersonData[]>,
  );

  return groupedActors;
};
