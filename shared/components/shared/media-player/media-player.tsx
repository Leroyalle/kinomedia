import React from 'react';
import { KinoboxPlayer } from './kinobox-player';
import { X } from 'lucide-react';
import { useClickAway } from 'react-use';
import { OverlayPlayer } from './overlay-player';

interface Props {
  mediaId: number;
  onClose: VoidFunction;
}

export const MediaPlayer: React.FC<Props> = ({ mediaId, onClose }) => {
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    onClose();
  });
  return (
    <OverlayPlayer>
      <X
        onClick={onClose}
        className="absolute top-10 right-10 cursor-pointer text-white z-[1000]"
        size={50}
      />
      <div ref={ref}>
        <KinoboxPlayer
          mediaId={mediaId}
          className="absolute w-1/2 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
      </div>
    </OverlayPlayer>
  );
};
