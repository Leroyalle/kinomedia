import React from 'react';
import { Container } from './container';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { NavBar } from './nav-bar';
import { ProfileButton } from './profile-button';
import { SearchInput } from './search-input';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b sticky top-0 z-10', className)}>
      <Container className="flex justify-between items-center py-6 bg-black">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image src="https://tvoe.live/img/full-logo.svg" width={125} height={40} alt="Logo" />
          </div>
        </Link>
        <NavBar />
        <div className="flex items-center gap-8">
          <SearchInput />
          <ProfileButton />
        </div>
      </Container>
    </header>
  );
};
