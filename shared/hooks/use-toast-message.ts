'use client';
import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';
import React from 'react';

interface ToastSearchParams {
  paid: string;
  verified: string;
}

export const useToastMessage = () => {
  const searchParams = useSearchParams() as unknown as Map<keyof ToastSearchParams, string>;
  const router = useRouter();
  const pathName = usePathname();

  React.useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('paid')) {
      toastMessage = 'Подписка успешно оплачена. Приятного просмотра!';
    }

    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace(pathName);
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, [searchParams, router]);
};
