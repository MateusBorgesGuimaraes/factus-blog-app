'use client';

import { Input } from '@/components/formComponents/input';
import styles from './styles.module.css';
import { Button } from '@/components/formComponents/button';
import { ImageInput } from '@/components/formComponents/image-input';
import Link from 'next/link';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CreateUser, userRoles } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserSchema } from '@/zod-schemas/create-user-schema';
import { useApi } from '@/hooks/user-api';
import { UserService } from '@/services/user-service';
import { AuthService } from '@/services/auth-service';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/user-store';
import { ErrorForm } from '@/components/formComponents/error';

export const Cadastrar = () => {
  const router = useRouter();
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const { setUser } = useUserStore();

  const methods = useForm<CreateUser>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = async (data: CreateUser) => {
    try {
      await UserService.createUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      const loginResponse = await AuthService.login({
        email: data.email,
        password: data.password,
      });

      if (data.profilePicture?.[0]) {
        const formData = new FormData();
        const file = data.profilePicture[0];

        formData.append('file', file);

        try {
          const uploadResponse = await UserService.uploadUserProfileImage(
            formData,
          );
          const userNew = {
            id: loginResponse.id,
            name: loginResponse.name,
            email: loginResponse.email,
            role: loginResponse.role as userRoles,
            profilePicture: uploadResponse.profilePicture,
          };
          setUser(userNew);
        } catch (uploadError) {
          console.error('Profile picture upload failed:', uploadError);
        }
      }

      router.push('/');
    } catch (error) {
      console.error('Registration error:', error);
    }
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
        >
          {error && <div className={styles.errorMessage}>{error}</div>}

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
              <ErrorForm error={methods.formState.errors.email.message} />
            )}
          </div>

          <div>
            <Input label="Nome" name="name" type="text" />
            {methods.formState.errors.name && (
              <ErrorForm error={methods.formState.errors.name.message} />
            )}
          </div>

          <div>
            <Input label="Senha" name="password" type="password" />
            {methods.formState.errors.password && (
              <ErrorForm error={methods.formState.errors.password.message} />
            )}
          </div>

          <div className={styles.buttonContainer}>
            {/* <Button disabled={methods.formState.isSubmitting}> */}
            <Button>
              {methods.formState.isSubmitting ? 'CADASTRANDO...' : 'CADASTRAR'}
            </Button>
          </div>

          <p className={styles.haveAccount}>
            Já tem uma conta? <Link href="/entrar">Entrar agora</Link>
          </p>
        </form>
      </FormProvider>
    </div>
  );
};
