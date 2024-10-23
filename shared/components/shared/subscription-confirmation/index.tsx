import React from 'react';
import { Logo } from '../logo';
import { Title } from '../title';
import { Background, Form, Info, Overlay } from './ui';
import { useSubscriptionModalStore } from '@/shared/store';
import { X } from 'lucide-react';
import { getPluralValues } from '@/shared/lib';
import { monthRules, userAgreementData } from '@/shared/constants';

interface Props {
  onClose: VoidFunction;
}

export const SubscriptionConfirmation: React.FC<Props> = ({ onClose }) => {
  const [monthCount, pricePerMonth, resetValues] = useSubscriptionModalStore((store) => [
    store.monthCount,
    store.pricePerMonth,
    store.resetValues,
  ]);

  const onClickClose = () => {
    resetValues();
    onClose();
  };

  React.useEffect(() => {
    document.body.classList.add('scroll-hidden');
    return () => document.body.classList.remove('scroll-hidden');
  });

  return (
    <Overlay>
      <div className="flex flex-col items-center z-10">
        <Logo />
        <X onClick={() => onClickClose()} className="absolute right-12 top-12 text-white" />
        <div className="flex flex-col mt-28 text-white max-w-[343px]">
          <Title
            text={`Оформление подписки на ${monthCount} ${getPluralValues(monthCount, monthRules)}`}
            size="md"
            className="text-center mb-4 font-medium"
          />
          <Info monthCount={monthCount} pricePerMonth={pricePerMonth} />
          <Form
            monthCount={monthCount}
            pricePerMonth={pricePerMonth}
            userAgreement={userAgreementData}
          />
        </div>
      </div>
      <Background />
    </Overlay>
  );
};
