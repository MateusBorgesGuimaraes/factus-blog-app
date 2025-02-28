'use client';

import { Input } from '@/components/formComponents/input';
import styles from '../../pages/cadastrar/styles.module.css';
import { Button } from '@/components/formComponents/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/user-store';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginUser, loginUserSchema } from '@/zod-schemas/login-user-schema';
import { AuthService } from '@/services/auth-service';
import { userRoles } from '@/types/user';
import { ErrorForm } from '@/components/formComponents/error';
import { UserService } from '@/services/user-service';

export const Entrar = () => {
  const router = useRouter();

  //aq pode dar erro
  const [error] = React.useState<string | null>(null);
  const { setUser } = useUserStore();

  const methods = useForm<LoginUser>({
    resolver: zodResolver(loginUserSchema),
  });

  const onSubmit = async (data: LoginUser) => {
    try {
      let savedPosts;
      const loginResponse = await AuthService.login({
        email: data.email,
        password: data.password,
      });

      if (loginResponse) {
        savedPosts = await UserService.getPostsSavedByUser();
      }

      const userNew = {
        id: loginResponse.id,
        name: loginResponse.name,
        email: loginResponse.email,
        role: loginResponse.role as userRoles,
        profilePicture: loginResponse.profilePicture,
        savedPosts: savedPosts ? savedPosts : null,
        bloggerPosts: null,
      };

      setUser(userNew);
      router.push('/');
    } catch (error) {
      console.error('login error:', error);
    }
  };

  return (
    <div className={styles.cadastrarContainer}>
      <div className={styles.titleContainer}>
        <h1>Entrar na Conta !!!</h1>
        <p>
          Entre ja na sua conta no Factus Blog para salvar as suas postagens
          favoritas quando quiser !
        </p>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={styles.formContainer}
          action=""
        >
          {error && <div className={styles.errorMessage}>{error}</div>}
          <div>
            <Input label="E-mail" name="email" type="email" />
            {methods.formState.errors.email && (
              <ErrorForm error={methods.formState.errors.email.message} />
            )}
          </div>

          <div>
            <Input label="Senha" name="password" type="password" />
            {methods.formState.errors.password && (
              <ErrorForm error={methods.formState.errors.password.message} />
            )}
          </div>

          <div className={styles.buttonContainer}>
            <Button>ENTRAR</Button>
          </div>
          <p className={styles.haveAccount}>
            Não tem uma conta?{' '}
            <Link href={'/cadastrar'}>Cadastre-se agora</Link>
          </p>
        </form>
      </FormProvider>
    </div>
  );
};
