import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Checkbox } from '@/shared/components/ui';

interface Props {
  onClick: VoidFunction;
  className?: string;
}

export const SubscriptionConfirmationConfirm: React.FC<Props> = ({ onClick, className }) => {
  return (
    <div className={cn('flex gap-x-3', className)}>
      <Checkbox onCheckedChange={onClick} id="confirm" className="rounded-[8px] w-5 h-5" />
      <div className="text-xs text-white/70">
        <label htmlFor="confirm">Оплачивая подписку, я принимаю условия</label>
        {/* TODO: сделать ссылками */}
        <p>
          Пользовательского соглашения, Соглашения о применении рекуррентных платежей, Соглашения о
          хранении учётных данных.
        </p>
      </div>
    </div>
  );
};
