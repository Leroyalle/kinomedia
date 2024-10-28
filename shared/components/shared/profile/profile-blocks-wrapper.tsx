import React from 'react';
import { cn } from '@/shared/lib/utils';
import { PersonalData } from './blocks';
import { UserId } from '../user';
import { DarkBlock } from './blocks/dark-block';
import { Gem } from 'lucide-react';

interface Props {
  userId: number;
  email: string;
  fullName?: string;
  image?: string | null;
  className?: string;
}

export const ProfileBlocksWrapper: React.FC<Props> = ({
  userId,
  email,
  fullName,
  image,
  className,
}) => {
  return (
    <section className={cn('w-full', className)}>
      <div className="flex justify-between mb-4">
        <PersonalData
          className="w-[67%] mr-4"
          title={'Личные данные'}
          fullName={fullName}
          endAdornment={<UserId id={userId} />}
          email={email}
          image={image}
        />

        <DarkBlock
          title={'Подписка'}
          href={'/profile/payment'}
          action={'Управлять'}
          icon={<Gem size={100} className="text-gray" />}
          className="rounded-3xl w-[33%] text-[#636363]"
        />
      </div>
    </section>
  );
};
