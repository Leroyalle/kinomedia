import React from 'react';
import { Logo } from '../logo';
import { Title } from '../title';
import { Background, Form, Info, Overlay } from './ui';
import { useSubscriptionModalStore } from '@/shared/store';
import { X } from 'lucide-react';
import { getPluralValues } from '@/shared/lib';
import { monthRules, userAgreementData } from '@/shared/constants';
import { createSubscription } from '@/app/actions';
import toast from 'react-hot-toast';

interface Props {
  onClose: VoidFunction;
}

export const SubscriptionConfirmation: React.FC<Props> = ({ onClose }) => {
  const [submitting, setSubmitting] = React.useState(false);
  const [id, monthCount, pricePerMonth, resetValues] = useSubscriptionModalStore((store) => [
    store.id,
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

  const onClickPayButton = async () => {
    try {
      setSubmitting(true);
      const url = await createSubscription(id);

      toast.error('Заказ успешно оформлен! 📝 Переход на оплату... ', {
        icon: '✅',
      });

      if (url) {
        location.href = url;
      }
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      toast.error('Не удалось создать заказ', {
        icon: '❌',
      });
    }
  };

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
            onClickPayButton={() => onClickPayButton()}
          />
        </div>
      </div>
      <Background />
    </Overlay>
  );
};
