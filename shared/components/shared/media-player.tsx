'use client';

import React from 'react';

interface Props {
  id: number;
}

export const MediaPlayer: React.FC<Props> = ({ id }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kinobox.tv/kinobox.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        (window as any).kbox(containerRef.current, {
          search: { kinopoisk: id },
          menu: {
            enabled: false,
          },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [id]);

  return <div ref={containerRef} className="kinobox_player"></div>;
};
