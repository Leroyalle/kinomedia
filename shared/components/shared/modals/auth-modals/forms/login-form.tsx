import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FormInput } from '../../../form-input';
import { useForm, FormProvider } from 'react-hook-form';
import { loginFormSchema, TLoginFormSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/components/ui';

interface Props {
  className?: string;
}

export const LoginForm: React.FC<Props> = ({ className }) => {
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: TLoginFormSchema) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('flex flex-col gap-4', className)}>
        <FormInput label={'Почта'} name={'email'} />
        <FormInput label={'Пароль'} name={'password'} type="password" />
        <Button
          variant={'secondary'}
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit">
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
