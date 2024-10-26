import React from 'react';

interface Props {
  expires: Date;
  className?: string;
}

export const SubscriptionUiExpires: React.FC<Props> = ({ expires, className }) => {
  return <p className={className}>Закончится: {expires.toLocaleDateString()}</p>;
};
