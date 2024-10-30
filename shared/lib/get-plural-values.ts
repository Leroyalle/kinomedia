/**
 * Функция возвращает верное склонение для заданного count по заданным правилам
 *
 * @param count - количество
 * @param rules - массив из 3х строк, где:
 *   - 1й элемент - склонение для одного
 *   - 2й элемент - склонение для 2-4
 *   - 3й элемент - склонение для 5 и более
 * @returns строка с верным склонением
 */

export const getPluralValues = (count: number, rules: string[]): string => {
  const result = new Intl.PluralRules('ru-RU').select(count);
  switch (result) {
    case 'one':
      return rules[0];
    case 'few':
      return rules[1];
    default:
      return rules[2];
  }
};
