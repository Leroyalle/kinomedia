'use client';
import React from 'react';
import { Container } from './container';
import { cn } from '@/shared/lib/utils';
import { Navigation } from './navigation';
import { ProfileButton } from './profile-button';
import { SearchInput } from './search-input';
import { navigationData } from '@/shared/constants';
import { Logo } from './logo';
import { PaymentButton } from './payment-button';
import { useScrollPage } from '@/shared/hooks';

interface Props {
  session: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ className, session }) => {
  const visible = useScrollPage();
  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[250ms] ease-in-out duration-300 bg-[#09090c]',
        !visible && '-top-28',
        className,
      )}>
      <Container className="flex justify-between items-center py-5 max-w-full px-8">
        <div className="flex items-center gap-24">
          <Logo />
          <Navigation
            items={navigationData.head}
            active={true}
            session={session}
            childStyles="text-white/70 hover:text-white transition"
          />
        </div>
        <div className="flex items-center gap-8">
          <SearchInput />
          <PaymentButton />
          <ProfileButton session={session} />
        </div>
      </Container>
    </header>
  );
};
