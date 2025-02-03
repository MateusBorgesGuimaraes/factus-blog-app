'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { LogoGreen } from '@/utils/icons-components/logo-green';
import React from 'react';
import { LogoRed } from '@/utils/icons-components/logo-red';
import { usePathname } from 'next/navigation';
import { MobileMenu } from '@/utils/icons-components/mobile-menu';
export const Header = () => {
  const [active, setActive] = React.useState(false);
  const [isHome, setIsHome] = React.useState(true);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <header className={`${styles.headerContainer}`}>
      <div className={`${styles.container} subContainer`}>
        <div
          className={`${styles.logoContainer} ${isHome ? '' : styles.logoRed}`}
        >
          <Link href={'/'}>{isHome ? <LogoGreen /> : <LogoRed />}</Link>
        </div>

        <div
          className={`${styles.searchBarContainer} ${
            isHome ? '' : styles.reverse
          }`}
        >
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

        <div>
          <button
            onClick={toggleMenu}
            className={`${styles.menuButton} ${
              isHome ? '' : styles.reverseMenuButton
            }`}
          >
            <MobileMenu />
          </button>

          <div
            className={`${styles.mobileMenu} ${active ? styles.active : ''}`}
          >
            <Link href={'/entrar'}>Entrar</Link>
            <Link href={'/cadastrar'}>Cadastrar</Link>
            <div className={styles.searchBarContainerMobile}>
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
          </div>
        </div>

        <div
          className={`${styles.linksContainer} ${
            isHome ? '' : styles.reverseLinks
          }`}
        >
          <Link href={'/entrar'}>Entrar</Link>
          <Link href={'/cadastrar'}>Cadastrar</Link>
        </div>
      </div>
    </header>
  );
};
