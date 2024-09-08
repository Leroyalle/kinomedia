'use client';
import React from 'react';
import { Container } from './container';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { NavBar } from './nav-bar';
import { ProfileButton } from './profile-button';
import { SearchInput } from './search-input';
import { useScrollPage } from '@/shared/hooks';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const visible = useScrollPage();
  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 transition-[250ms] ease-in-out duration-300',
          !visible && '-top-28',
          className,
        )}>
        <Container className="flex justify-between items-center py-5 bg-black">
          <div className="flex items-center gap-24">
            <Link href="/">
              <div className="flex items-center gap-3">
                <Image
                  src="https://tvoe.live/img/full-logo.svg"
                  width={125}
                  height={30}
                  alt="Logo"
                />
              </div>
            </Link>
            <NavBar />
          </div>
          <div className="flex items-center gap-8">
            <SearchInput />
            <ProfileButton />
          </div>
        </Container>
      </header>
    </>
  );
};
