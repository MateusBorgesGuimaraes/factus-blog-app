'use client';

import { Input } from '@/components/formComponents/input';
import styles from './styles.module.css';
import dynamic from 'next/dynamic';
import { Button } from '@/components/formComponents/button';
import { useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import { FormProvider, useForm } from 'react-hook-form';
import {
  CreatePostFormData,
  createPostSchema,
} from '@/zod-schemas/create-post-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorForm } from '@/components/formComponents/error';
import { ImageInput } from '@/components/formComponents/image-input';
import { SelectIntegrate } from '@/components/formComponents/selectIntegrate';
import { PostService } from '@/services/post-service';
import { useUserStore } from '@/store/user-store';
import { UserService } from '@/services/user-service';
import { useRouter } from 'next/navigation';

const Editor = dynamic(() => import('../../../Editor/Editor'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export enum Categories {
  LIVROS = 'livros',
  FICCAO = 'ficcao',
  HISTORIA = 'história',
  TECNOLOGIA = 'tecnologia',
  CIENCIA = 'ciencia',
  POLITICA = 'politica',
}

export const CriarPost = () => {
  const router = useRouter();
  const editorRef = useRef<EditorJS | null>(null);
  const { setBloggerPosts } = useUserStore();

  const methods = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: '',
      category: Categories.LIVROS,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: CreatePostFormData) => {
    try {
      const editorData = await editorRef.current?.save();
      const content = JSON.stringify(editorData);
      const postData = {
        title: data.title,
        coverImage: 'tempimage.com',
        category: data.category,
        content: content,
      };

      const response = await PostService.createPost(postData);

      if (response && data.coverImage?.[0]) {
        const formData = new FormData();
        const file = data.coverImage[0];

        formData.append('file', file);

        try {
          await PostService.uploadUCoverImage(formData, response.id.toString());
        } catch (error) {
          console.error('Error uploading cover image:', error);
        }
      }

      try {
        const bloggerPosts = await UserService.getAuthorPosts();

        if (bloggerPosts) {
          setBloggerPosts(bloggerPosts);
        }
      } catch (error) {
        console.error('Error to geting blogger posts:', error);
      }

      router.push('/perfil/meus-posts');
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <section className={styles.criarPostsContainer}>
      <h1 className={styles.title}>Criar Post</h1>

      <FormProvider {...methods}>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input label="Titulo" name="title" type="text" />
            {errors.title && <ErrorForm error={errors.title.message} />}
          </div>

          <div>
            <SelectIntegrate
              label="Categoria"
              name="category"
              options={Object.values(Categories)}
            />
            {errors.category && <ErrorForm error={errors.category.message} />}
          </div>

          <div className={styles.imageContainer}>
            <ImageInput
              required
              label="Capa da noticia"
              name="coverImage"
              accept="image/jpeg,image/png,image/jpg"
              height="230px"
            />
            {errors.coverImage && (
              <ErrorForm error={errors.coverImage.message} />
            )}
          </div>

          <div className={styles.editorContainer}>
            <Editor ref={editorRef} />
          </div>

          <div className={styles.buttonContainer}>
            <Button
              // type="submit"
              // disabled={methods.formState.isSubmitting}
              borderRadius="8px"
            >
              {methods.formState.isSubmitting ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};
