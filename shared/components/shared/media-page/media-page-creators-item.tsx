import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  imageUrl: string;
  name: string;

  profession: string;
}

export const MediaPageCreatorsItem: React.FC<Props> = ({ imageUrl, name, profession }) => {
  return (
    <Link href={'/'} className="flex flex-col gap-1 max-w-32">
      <Image
        className="block w-[160px] h-[150px] rounded-[50%] object-cover"
        src={imageUrl}
        alt={name}
        width={160}
        height={160}
      />
      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        <span className="text-white/70">{profession.slice(0, -1)}</span>
      </div>
    </Link>
  );
};
