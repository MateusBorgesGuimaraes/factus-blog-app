import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCETEPD_FILE_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];

enum Categories {
  LIVROS = 'livros',
  FICCAO = 'ficcao',
  HISTORIA = 'história',
  TECNOLOGIA = 'tecnologia',
  CIENCIA = 'ciencia',
  POLITICA = 'politica',
}

export const createPostSchema = z.object({
  title: z.string().min(3, 'O título deve ter pelo menos 3 caracteres'),
  category: z.nativeEnum(Categories, {
    errorMap: () => ({ message: 'Selecione uma categoria válida' }),
  }),
  coverImage: z
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

export type CreatePostFormData = z.infer<typeof createPostSchema>;
