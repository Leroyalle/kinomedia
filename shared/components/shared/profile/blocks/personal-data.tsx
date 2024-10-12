import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../../title';
import { Avatar } from '../personal-data-ui';
import Link from 'next/link';

interface Props {
  title?: string;
  image?: string;
  email: string;
  endAdornment?: React.ReactNode;
  className?: string;
}

export const PersonalData: React.FC<Props> = ({ title, image, email, endAdornment, className }) => {
  return (
    <article className={cn('flex flex-col p-6 bg-[hsla(0,0%,100%,.1)] rounded-3xl', className)}>
      {title && (
        <header className="flex items-center justify-between mb-6">
          <Title text={title} size="lg" />
          {endAdornment}
        </header>
      )}

      <div className="flex gap-x-8 items-center">
        <Avatar imageUrl={image} />
        <div className="flex flex-col gap-y-2">
          <span className="text-lg">{email}</span>
          <Link href={'/profile/edit'} className="text-[#636363] transition-all hover:text-white">
            Редактировать
          </Link>
        </div>
      </div>
    </article>
  );
};
