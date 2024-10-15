import React from 'react';
import { cn } from '@/shared/lib/utils';
import { UserAvatar as Avatar } from '../../user';
import Link from 'next/link';
import { TitleAndId } from '../../user';

interface Props {
  title?: string;
  image?: string | null;
  email: string;
  endAdornment?: React.ReactNode;
  className?: string;
}

export const PersonalData: React.FC<Props> = ({ title, image, email, endAdornment, className }) => {
  return (
    <article
      className={cn('flex flex-col p-6 bg-[hsla(0,0%,100%,.1)] rounded-3xl h-[205px]', className)}>
      {title && <TitleAndId title={title} endAdornment={endAdornment} className="mb-6" />}

      <div className="flex gap-x-8 items-center">
        <Avatar imageUrl={image} className="w-24 h-24" />
        <div className="flex flex-col gap-y-2">
          <span className="text-lg">{email}</span>
          <Link
            href={'/profile/edit'}
            className="text-[#636363] transition-all hover:text-white w-fit">
            Редактировать
          </Link>
        </div>
      </div>
    </article>
  );
};
