import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const OverlayPlayer: React.FC<Props> = ({ children }) => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full z-[1000] bg-black/90">
      {children}
    </div>
  );
};
