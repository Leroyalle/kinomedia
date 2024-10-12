import { Gem, BellRing, Laptop, Gift } from 'lucide-react';
export const profileActionsData = [
  {
    name: 'Подписка',
    action: 'Управлять',
    href: '/profile/payment',
    icon: Gem,
  },
  {
    name: 'Мои устройства',
    action: 'Управлять',
    href: '/profile/devices',
    icon: Laptop,
  },
  {
    name: 'Уведомления',
    action: 'Настройки',
    href: '/profile/notifications',
    icon: BellRing,
  },
  {
    name: 'Реферальная программа',
    action: 'Участвовать',
    href: '/referral',
    icon: Gift,
  },
];
