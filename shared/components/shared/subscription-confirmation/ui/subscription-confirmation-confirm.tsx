import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Checkbox } from '@/shared/components/ui';
import { TUserAgreementData } from '@/shared/constants/user-agreement';

interface Props {
  items: TUserAgreementData;
  onClick: VoidFunction;
  className?: string;
}

export const SubscriptionConfirmationConfirm: React.FC<Props> = ({ items, onClick, className }) => {
  return (
    <div className={cn('flex gap-x-3', className)}>
      <Checkbox onCheckedChange={onClick} id="confirm" className="rounded-[8px] w-5 h-5" />
      <div className="text-xs text-white/70">
        <label htmlFor="confirm">Оплачивая подписку, я принимаю условия</label>
        <p>
          {items.map((item, i) => (
            <>
              <a key={i} href={item.href} className="underline">
                {item.name}
              </a>
              {i === items.length - 1 ? '. ' : ', '}
            </>
          ))}
        </p>
      </div>
    </div>
  );
};
