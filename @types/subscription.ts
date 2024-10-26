import { CompletedSubscription, Subscription } from '@prisma/client';
export type CompletedSubscriptionWithRelation = CompletedSubscription & {
  subscription: Subscription;
};
