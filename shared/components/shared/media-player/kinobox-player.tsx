'use client';
import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mediaId: number;
  className?: string;
}

export const KinoboxPlayer: React.FC<Props> = ({ mediaId, className }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kinobox.tv/kinobox.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        (window as any).kbox(containerRef.current, {
          search: { kinopoisk: mediaId },
          // allowfullscreen: true,
          menu: {
            enabled: false,
          },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [mediaId]);

  return <div ref={containerRef} className={cn('kinobox_player', className)}></div>;
};
