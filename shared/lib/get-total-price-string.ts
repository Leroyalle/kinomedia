import { monthRules } from '../constants';
import { getPluralValues } from './get-plural-values';

export const getTotalPriceString = (monthCount: number, pricePerMonth: number) => {
  return monthCount > 1
    ? `${monthCount} ${getPluralValues(monthCount, monthRules)} за ${pricePerMonth * monthCount} ₽`
    : `Оформить за ${pricePerMonth} ₽`;
};
