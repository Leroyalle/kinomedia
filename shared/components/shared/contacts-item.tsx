import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  icon: string;
  text: string;
  href: string;
  className?: string;
}

export const ContactsItem: React.FC<Props> = ({ icon, text, href, className }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex gap-2 items-center hover:brightness-200 text-white/70 hover:text-white',
        className,
      )}>
      <img width={22} height={22} src={icon} alt={text} className="transition" />
      <span className="text-base transition">{text}</span>
    </a>
  );
};
