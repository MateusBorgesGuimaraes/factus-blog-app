import { Input } from '@/components/formComponents/input';
import styles from '../../pages/cadastrar/styles.module.css';
import { Button } from '@/components/formComponents/button';
import Link from 'next/link';

export const Entrar = () => {
  return (
    <div className={styles.cadastrarContainer}>
      <div className={styles.titleContainer}>
        <h1>Entrar na Conta !!!</h1>
        <p>
          Entre ja na sua conta no Factus Blog para salvar as suas postagens
          favoritas quando quiser !
        </p>
      </div>

      <form className={styles.formContainer} action="">
        <Input label="E-mail" name="email" type="email" />
        <Input label="Senha" name="senha" type="password" />

        <div className={styles.buttonContainer}>
          <Button>ENTRAR</Button>
        </div>
        <p className={styles.haveAccount}>
          Não tem uma conta? <Link href={'/cadastrar'}>Cadastre-se agora</Link>
        </p>
      </form>
    </div>
  );
};
