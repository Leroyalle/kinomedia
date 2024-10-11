import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FormInput } from '../../../form-input';
import { useForm, FormProvider } from 'react-hook-form';
import { registerFormSchema, TRegisterFormSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/components/ui';
import toast from 'react-hot-toast';
import { registerUser } from '@/app/actions';

interface Props {
  onClose: VoidFunction;
  className?: string;
}

export const RegisterForm: React.FC<Props> = ({ onClose, className }) => {
  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: '',
      confirmPassword: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: TRegisterFormSchema) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      onClose();

      toast.success('Вы успешно зарегестрировались', {
        icon: '✅',
      });
    } catch (error) {
      console.error('Error [REGISTER]', error);
      toast.error('Не удалось зарегестрироваться', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('flex flex-col gap-4', className)}>
        <FormInput label={'Имя'} name={'fullName'} />
        <FormInput label={'Почта'} name={'email'} />
        <FormInput label={'Пароль'} name={'password'} type="password" />
        <FormInput label={'Повторите пароль'} name={'confirmPassword'} type="password" />
        <Button
          variant={'secondary'}
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit">
          Зарегестрироваться
        </Button>
      </form>
    </FormProvider>
  );
};
