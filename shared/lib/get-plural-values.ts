export const getPluralValues = (count: number, rules: string[]) => {
  const result = new Intl.PluralRules('ru-RU').select(count);
  switch (result) {
    case 'one':
      return `${count} ${rules[0]}`;
    case 'few':
      return `${count} ${rules[1]}`;
    case 'many':
      return `${count} ${rules[2]}`;
  }
};
