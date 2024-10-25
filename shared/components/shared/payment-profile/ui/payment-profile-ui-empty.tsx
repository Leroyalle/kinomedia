import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../../title';
import Link from 'next/link';
import { Button } from '@/shared/components/ui';

interface Props {
  className?: string;
}

export const PaymentProfileUiEmpty: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <div className="mb-3">
        <Title text={'Нет активной подписки'} size="md" />
        <p>С подпиской ты сможешь смотреть тысячи фильмов и сериалов без ограничений</p>
      </div>
      <Link href="/payment">
        <Button variant={'secondary'} className="h-12">
          Попробовать бесплатно
        </Button>
      </Link>
    </div>
  );
};
