import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

interface Props {
  w?: number;
  h?: number;
  className?: string;
}

export const Logo: React.FC<Props> = ({ w = 135, h = 40, className }) => {
  return (
    <Link href="/" className={className}>
      <div className="flex items-center gap-3">
        <img
          src="https://tvoe.live/img/full-logo.svg"
          width={Number(w)}
          height={Number(h)}
          alt="Logo"
        />
      </div>
    </Link>
  );
};
