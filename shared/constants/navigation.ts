export const navigationData = {
  head: [
    { text: 'Главная', href: '/' },
    { text: 'Фильмы', href: '/films' },
    { text: 'Сериалы', href: '/series' },
  ],
  foot: [
    { text: 'Главная', href: '/' },
    { text: 'Фильмы', href: '/films' },
    { text: 'Сериалы', href: '/series' },
    { text: 'Контакты', href: '/contacts' },
  ],
  options: [
    { text: 'Реферальная программа', href: '/referral' },
    { text: 'Вопросы и ответы', href: '/qa' },
    { text: 'Условия пользования', href: '/docs' },
  ],
};

export type TNavigationHead = typeof navigationData.head;
export type TNavigationFoot = typeof navigationData.foot;
export type TNavigationOptions = typeof navigationData.options;
