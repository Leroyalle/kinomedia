'use client';
import React from 'react';
import { Container } from './container';
import { cn } from '@/shared/lib/utils';
import { Navigation } from './navigation';
import { ProfileButton } from './profile-button';
import { SearchInput } from './search-input';
import { useScrollPage } from '@/shared/hooks';
import { navigationData } from '@/shared/constants';
import { Logo } from './logo';
import { AuthModal } from './modals';
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const visible = useScrollPage();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[250ms] ease-in-out duration-300',
        !visible && '-top-28',
        className,
      )}>
      <Container className="flex justify-between items-center py-5 bg-black">
        <div className="flex items-center gap-24">
          <Logo />
          <Navigation
            items={navigationData.head}
            active={true}
            childStyles="text-white/70 hover:text-white transition"
          />
        </div>
        <div className="flex items-center gap-8">
          <SearchInput />
          <ProfileButton onClickSignIn={() => setIsDialogOpen(true)} />

          <AuthModal open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        </div>
      </Container>
    </header>
  );
};
