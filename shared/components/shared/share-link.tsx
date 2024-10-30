'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TShareLinkData } from '@/shared/constants/share-link';
import { usePathname } from 'next/navigation';
import toast from 'react-hot-toast';

interface Props {
  items: TShareLinkData;
  className?: string;
}

export const ShareLink: React.FC<Props> = ({ items, className }) => {
  const pathName = usePathname();
  const copiedUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathName}`;
  const onClickLinkCopy = () => {
    navigator.clipboard.writeText(copiedUrl);
    toast.success('Ссылка скопирована');
  };

  return (
    <div className={cn('bg-[#232326] py-3 rounded-xl', className)}>
      <ul className={cn('flex flex-col', className)}>
        <li
          onClick={() => onClickLinkCopy()}
          className="w-full text-md hover:bg-[hsla(0,0%,100%,.1)] transition-all cursor-pointer">
          <p className="flex items-center gap-x-2 py-2 px-3">
            <img src={'/assets/social-icons/link-copy.svg'} alt={'Ссылка'} width={25} height={25} />
            Скопировать ссылку
          </p>
        </li>
        {items.map((item, i) => (
          <li key={i} className="w-full text-md hover:bg-[hsla(0,0%,100%,.1)] transition-all">
            <a
              href={`${item.href}${copiedUrl}`}
              target="_blank"
              className="flex items-center gap-x-2 py-2 px-3">
              <img src={item.icon} alt={item.name} width={25} height={25} />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
