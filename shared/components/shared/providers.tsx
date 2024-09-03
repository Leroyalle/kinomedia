import React, { ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';
interface Props {
  children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <NextTopLoader />
    </>
  );
};
