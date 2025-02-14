import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCETEPD_FILE_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];

export const createUserSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email Invalido'),
  password: z
    .string()
    .min(8, 'A senha deve ter no minimo 8 caracteres')
    .max(32, 'A senha pode ter no maximo 32 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'A senha deve ter pelo menos 1 letra maiscula, 1 minuscula, 1 numero e um caracter especial',
    ),
  profilePicture: z
    .custom<FileList>()
    .optional()
    .refine(
      (files) => !files || files.length === 0 || files.length === 1,
      'Apenas uma imagem pode ser adicionada.',
    )
    .refine(
      (files) => !files || files.length === 0 || files[0].size <= MAX_FILE_SIZE,
      'O tamanho maximo permitido do arquivo é 5MB.',
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        ACCETEPD_FILE_TYPES.includes(files[0].type),
      'Apenas imagens de formato .jpg, .jpeg e .png são permitidas.',
    ),
});
