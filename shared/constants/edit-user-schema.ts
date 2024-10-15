import { z } from 'zod';
import {
  loginFormSchema,
  registerFormSchema,
} from '../components/shared/modals/auth-modals/forms/schemas';

export const editUserSchema = registerFormSchema.and(
  z.object({
    red: z.string().min(2, { message: 'Не менее двух символов' }),
  }),
);

export type TEditUserSchema = z.infer<typeof editUserSchema>;
