'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { CheckCheck, Copy } from 'lucide-react';
import toast from 'react-hot-toast';

interface Props {
  id: number;
  className?: string;
}

export const UserId: React.FC<Props> = ({ id, className }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const onClickCopied = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(String(id));
    toast.success('ID скопирован', {
      icon: '✅',
    });
  };

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [isCopied]);

  return (
    <div className={cn('flex items-center gap-x-3 text-gray-400', className)}>
      <span>ID: {id}</span>
      {isCopied ? (
        <CheckCheck onClick={() => onClickCopied()} className="select-none" />
      ) : (
        <Copy size={20} onClick={() => onClickCopied()} className="select-none" />
      )}
    </div>
  );
};
