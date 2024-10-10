import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Введите корректную почту' }),
  password: z.string().min(6, { message: 'Пароль слишком короткий' }),
});

export const registerFormSchema = loginFormSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: 'Не менее двух символов' }),
      confirmPassword: z.string().min(6, { message: 'Пароль слишком короткий' }),
    }),
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;
export type TRegisterFormSchema = z.infer<typeof registerFormSchema>;
