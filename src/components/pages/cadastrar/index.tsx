import { Input } from '@/components/formComponents/input';
import styles from './styles.module.css';
import { Button } from '@/components/formComponents/button';
import { ImageInput } from '@/components/formComponents/image-input';
import Link from 'next/link';

export const Cadastrar = () => {
  return (
    <div className={styles.cadastrarContainer}>
      <div className={styles.titleContainer}>
        <h1>Cadastre-se Agora !!!</h1>
        <p>
          Cadastre-se agora no Factus Blog para salvar as suas postagens
          favoritas quando quiser !
        </p>
      </div>

      <form className={styles.formContainer} action="">
        <div className={styles.imageContainer}>
          <ImageInput
            required
            label="Foto de Perfil"
            name="image"
            height="180px"
          />
        </div>
        <Input label="E-mail" name="email" type="email" />
        <Input label="Username" name="username" type="text" />
        <Input label="Senha" name="senha" type="password" />

        <div className={styles.buttonContainer}>
          <Button>CADASTRAR</Button>
        </div>
        <p className={styles.haveAccount}>
          Já tem uma conta? <Link href={'/entrar'}>Entrar agora</Link>
        </p>
      </form>
    </div>
  );
};
