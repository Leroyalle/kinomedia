import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FormInput } from '../../../form-input';
import { useForm, FormProvider } from 'react-hook-form';
import { loginFormSchema, TLoginFormSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/components/ui';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { revalidatePayment } from '@/app/actions';

interface Props {
  onClose: VoidFunction;
  className?: string;
}

export const LoginForm: React.FC<Props> = ({ onClose, className }) => {
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: TLoginFormSchema) => {
    try {
      const resp = await signIn('credentials', {
        ...data,
        redirect: false,
        callbackUrl: '/profile',
      });

      if (!resp?.ok) {
        throw Error();
      }
      await revalidatePayment();
      onClose();

      toast.success('Вы успешно вошли в аккаунт', {
        icon: '✅',
      });
    } catch (error) {
      console.error('Error [LOGIN]', error);
      toast.error('Не удалось войти в аккаунт', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('flex flex-col gap-5', className)}>
        <FormInput label={'Почта'} name={'email'} className="text-white" inputStyles="text-black" />
        <FormInput
          label={'Пароль'}
          name={'password'}
          type="password"
          className="text-white"
          inputStyles="text-black"
        />
        <Button
          variant={'secondary'}
          loading={form.formState.isSubmitting}
          className="h-12 text-base mt-2"
          type="submit">
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
