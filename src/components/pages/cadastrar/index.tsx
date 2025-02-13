'use client';

import { Input } from '@/components/formComponents/input';
import styles from './styles.module.css';
import { Button } from '@/components/formComponents/button';
import { ImageInput } from '@/components/formComponents/image-input';
import Link from 'next/link';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CreateUser } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserSchema } from '@/zod-schemas/create-user-schema';
import { useApi } from '@/hooks/user-api';
import { UserService } from '@/services/user-service';

export const Cadastrar = () => {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const {
    data: reponse,
    error,
    loading,
    execute: registerUser,
  } = useApi(UserService.createUser);

  const {
    data: reponseUpload,
    error: errorUpload,
    loading: loadingUpload,
    execute: uploadPicture,
  } = useApi(UserService.uploadUserProfileImage);

  const methods = useForm<CreateUser>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = async (data: CreateUser) => {
    registerUser(data);
    if (error) return console.log('error ao criar user');
    if (data.profilePicture && data.profilePicture[0]) {
      const formData = new FormData();
      formData.append('file', data.profilePicture[0]);
      uploadPicture(formData);
    }
    if (errorUpload) console.log('error no upload da imagem');
  };

  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className={styles.cadastrarContainer}>
      <div className={styles.titleContainer}>
        <h1>Cadastre-se Agora !!!</h1>
        <p>
          Cadastre-se agora no Factus Blog para salvar as suas postagens
          favoritas quando quiser !
        </p>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={styles.formContainer}
          action=""
        >
          <div className={styles.imageContainer}>
            <ImageInput
              required
              label="Foto de Perfil"
              name="profilePicture"
              accept="image/jpeg,image/png,image/jpg"
              height="180px"
            />
          </div>
          <div>
            <Input label="E-mail" name="email" type="email" />
            {methods.formState.errors.email && (
              <p>{methods.formState.errors.email.message}</p>
            )}
          </div>
          <div>
            <Input label="Nome" name="name" type="text" />
          </div>
          <div>
            <Input label="Senha" name="password" type="password" />
          </div>

          <div className={styles.buttonContainer}>
            <Button>CADASTRAR</Button>
          </div>
          <p className={styles.haveAccount}>
            Já tem uma conta? <Link href={'/entrar'}>Entrar agora</Link>
          </p>
        </form>
      </FormProvider>
    </div>
  );
};
