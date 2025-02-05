import Image from 'next/image';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.firstColumn}>
          <div>
            <h4>Parceiros</h4>
            <p>Ekscolars</p>
            <p>Remanescentes</p>
            <p>Conecta</p>
            <p>Curtime</p>
          </div>

          <div>
            <h4>Contatos</h4>

            <p>(11) 99999-9999</p>
            <p>contato@factusBlog.com</p>
            <p>Av. Paulista, 1234 - Belo Horizonte, MG</p>
            <p>CEP: 12345-678</p>
          </div>

          <div>
            <h4>Informações</h4>
            <p>Termos de uso</p>
            <p>Política de privacidade</p>
            <p>nosssos objetivos</p>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <p>Informe-se com</p>
          <Image
            src="/icons/green-logo-icon.svg"
            alt=""
            width={120}
            height={42}
          />
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Equipe Factus. Todos os direitos
        reservados
      </p>
    </footer>
  );
};
