import { ActiveStatusEnum } from '@prisma/client';

type subscriptionStatusDataItem = {
  [K in ActiveStatusEnum]: string;
};

export const subscriptionStatusData: subscriptionStatusDataItem = {
  ACTIVE: 'активна',
  CANCELLED: 'отменено',
  EXPIRES: 'закончилась',
};
