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
