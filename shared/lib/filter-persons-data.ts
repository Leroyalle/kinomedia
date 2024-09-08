import { PersonData } from '@/@types/person';

export const filterPersonsData = (data: PersonData[]) => {
  const professions = Array.from(new Set(data.map((item) => item.profession)));
  const groupedActors = professions.reduce((acc, profession) => {
    acc[profession] = data.filter((item) => item.profession === profession);
    return acc;
  }, {} as Record<string, PersonData[]>);

  return groupedActors;
};
