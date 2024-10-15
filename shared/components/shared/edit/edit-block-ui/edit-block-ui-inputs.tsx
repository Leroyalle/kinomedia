'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FormInput } from '../../form-input';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerFormSchema, TRegisterFormSchema } from '../../modals/auth-modals/forms/schemas';
import { Button } from '@/shared/components/ui';
import toast from 'react-hot-toast';
import { updateUser } from '@/app/actions';

interface Props {
  fullName: string;
  email: string;
  className?: string;
}

export const EditBlockUiInputs: React.FC<Props> = ({ fullName, email, className }) => {
  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: fullName,
      email: email,
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TRegisterFormSchema) => {
    try {
      await updateUser({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      form.resetField('password');
      form.resetField('confirmPassword');

      toast.error('Данные обновлены', {
        icon: '✅',
      });
    } catch (error) {
      toast.error('Не удалось обновить данные', {
        icon: '❌',
      });
    }
  };
  return (
    <FormProvider {...form}>
      <form className={cn('flex flex-col', className)} onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex mb-8 gap-x-8">
          <FormInput
            name={'fullName'}
            inputStyles={'bg-[hsla(0,0%,100%,.1)] text-white border-none'}
            autoComplete="off"
            className="text-white"
            placeholder="Имя"
          />
          <FormInput
            name={'email'}
            inputStyles={'bg-[hsla(0,0%,100%,.1)] text-white border-none'}
            autoComplete="off"
            className="text-white"
            placeholder="Почта"
          />
          <FormInput
            name={'password'}
            inputStyles={'bg-[hsla(0,0%,100%,.1)] text-white border-none'}
            autoComplete="off"
            className="text-white"
            placeholder="Новый пароль"
          />
          <FormInput
            name={'confirmPassword'}
            inputStyles={'bg-[hsla(0,0%,100%,.1)] text-white border-none'}
            autoComplete="off"
            className="text-white"
            placeholder="Подтвердите пароль"
          />
        </div>

        <Button
          loading={form.formState.isSubmitting}
          variant={'secondary'}
          type="submit"
          className="max-w-32">
          Сохранить
        </Button>
      </form>
    </FormProvider>
  );
};
