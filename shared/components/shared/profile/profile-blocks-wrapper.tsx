'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { PersonalData } from './blocks';
import { UserId } from '../user';
import { profileActionsData } from '@/shared/constants';
import { DarkBlock } from './blocks/dark-block';
import { useProfileStore } from '@/shared/store';

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
  const [user, getUserData] = useProfileStore((state) => [state.user, state.getUserData]);
  React.useEffect(() => {
    getUserData(userId);
  }, []);

  // TODO: показывать имя если есть
  return (
    <section className={cn('w-full', className)}>
      <div className="flex justify-between mb-4">
        <PersonalData
          className="w-[67%] mr-4"
          title={'Личные данные'}
          fullName={user.fullName || fullName}
          endAdornment={<UserId id={user.id || userId} />}
          email={user.email || email}
          image={user.image || image}
        />
        {profileActionsData.slice(0, 1).map((action, i) => (
          <DarkBlock
            title={action.name}
            key={i}
            href={action.href}
            action={action.action}
            icon={<action.icon size={100} className="text-gray" />}
            className="rounded-3xl w-[33%] text-[#636363]"
          />
        ))}
      </div>
      <div className="flex justify-between gap-x-4">
        {profileActionsData.slice(1).map((action, i) => (
          <DarkBlock
            title={action.name}
            key={i}
            href={action.href}
            action={action.action}
            icon={<action.icon size={100} />}
            className="rounded-3xl w-[33%] text-[#636363]"
          />
        ))}
      </div>
    </section>
  );
};
