import React from 'react';
import { cn } from '@/shared/lib/utils';
import { SubscriptionConfirmationConfirm as Confirm } from './subscription-confirmation-confirm';
import { SubscriptionConfirmationButton as PayButton } from './subscription-confirmation-button';
import { TUserAgreementData } from '@/shared/constants/user-agreement';

interface Props {
  monthCount: number;
  pricePerMonth: number;
  userAgreement: TUserAgreementData;
  onClickPayButton: VoidFunction;
  className?: string;
}

export const SubscriptionConfirmationForm: React.FC<Props> = ({
  monthCount,
  pricePerMonth,
  userAgreement,
  onClickPayButton,
  className,
}) => {
  const [isConfirmed, setIsConfirmed] = React.useState(false);
  return (
    <form className={cn('', className)}>
      <PayButton
        monthCount={monthCount}
        pricePerCount={pricePerMonth}
        disabled={!isConfirmed}
        onClick={onClickPayButton}
        type="button"
        className="mt-6 mb-3"
      />
      <Confirm onClick={() => setIsConfirmed(!isConfirmed)} items={userAgreement} />
    </form>
  );
};
