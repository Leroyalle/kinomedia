import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FormInput } from '../../../form-input';
import { useForm, FormProvider } from 'react-hook-form';
import { registerFormSchema, TRegisterFormSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/components/ui';

interface Props {
  className?: string;
}

export const RegisterForm: React.FC<Props> = ({ className }) => {
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
    console.log(data);
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
