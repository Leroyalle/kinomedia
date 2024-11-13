import { monthRules } from '../constants';
import { getPluralValues } from './get-plural-values';

/**
 * Функция для формирования строки с общей суммой и количеством месяцев
 * @param {number} monthCount - количество месяцев
 * @param {number} pricePerMonth - стоимость одного месяца
 * @returns {string} - строка с общей суммой и количеством месяцев
 */

export const getTotalPriceString = (monthCount: number, pricePerMonth: number) => {
  return monthCount > 1
    ? `${monthCount} ${getPluralValues(monthCount, monthRules)} за ${pricePerMonth * monthCount} ₽`
    : `Оформить за ${pricePerMonth} ₽`;
};
