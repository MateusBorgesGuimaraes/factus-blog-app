import { z } from 'zod';

export const loginUserSchema = z.object({
  email: z.string().email('Email Invalido'),
  password: z
    .string()
    .min(8, 'A senha deve ter no minimo 8 caracteres')
    .max(32, 'A senha pode ter no maximo 32 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'A senha deve ter pelo menos 1 letra maiscula, 1 minuscula, 1 numero e um caracter especial',
    ),
});

export type LoginUser = z.infer<typeof loginUserSchema>;
