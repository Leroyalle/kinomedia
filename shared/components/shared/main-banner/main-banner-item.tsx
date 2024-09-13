import React from 'react';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';
import { Title } from '../title';
import { MediaPageDetails } from '../media-page/content/media-page-details';
import { Backdrop } from '../backdrop';

interface Props {
  id: number;
  imageUrl: string;
  name: string;
  ratingKp: number;
  year: number;
  genre: string;
  className?: string;
}

export const MainBannerItem: React.FC<Props> = ({
  id,
  imageUrl,
  name,
  ratingKp,
  year,
  genre,
  className,
}) => {
  return (
    <Link
      href={`/media/${id}`}
      className={cn(
        'w-full h-full absolute inset-0 grid grid-cols-[1fr,2fr] justify-between backdrop-shadow',
        className,
      )}>
      <div className="flex flex-col gap-2 z-20 absolute bottom-7 left-[10px] ">
        <Title text={name} size="lg" />
        <MediaPageDetails
          ratingKp={ratingKp}
          year={year}
          genre={genre}
          className="bg-[linear-gradient(90deg,#48078f,#004fd6)]"
        />
      </div>
      <Backdrop imageUrl={imageUrl} className="absolute w-full h-full inset-0 -z-10" />;
    </Link>
  );
};
