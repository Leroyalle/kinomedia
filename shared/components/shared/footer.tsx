import React from 'react';
import { cn } from '@/shared/lib/utils';
import { SupportBlock } from './support-block';
import { Container } from './container';
import { FootBar } from './foot-bar';
import { FootBottom } from './foot-bottom';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer>
      <Container className="my-[64px] max-w-full px-8">
        <div className={cn('flex flex-col', className)}>
          <SupportBlock className="mb-10" />
          <FootBar />
          <hr className="my-6 w-full bg-white h-[1px]" />
          <FootBottom className="mt-[44px]" />
        </div>
      </Container>
    </footer>
  );
};
