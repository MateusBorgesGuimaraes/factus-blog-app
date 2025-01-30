import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { LogoGreen } from '@/utils/icons-components/logo-green';
export const Header = () => {
  return (
    <header className={`${styles.headerContainer}`}>
      <div className={styles.logoContainer}>
        <Link href={'/'}>
          <LogoGreen />
        </Link>
      </div>

      <div className={styles.searchBarContainer}>
        <input type="text" placeholder="buscar post..." />
        <button>
          <Image
            src={'/icons/search-white-icon.svg'}
            alt="logo"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div className={styles.linksContainer}>
        <Link href={'/entrar'}>Entrar</Link>
        <Link href={'/cadastrar'}>Cadastrar</Link>
      </div>
    </header>
  );
};
