'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { LogoGreen } from '@/utils/icons-components/logo-green';
import React from 'react';
import { LogoRed } from '@/utils/icons-components/logo-red';
import { usePathname } from 'next/navigation';
import { MobileMenu } from '@/utils/icons-components/mobile-menu';
import { Profile } from '../Profile';
import { ArrowDownGreen } from '@/utils/icons-components/arrow-down-green';
import { ArrowDownRed } from '@/utils/icons-components/arrow-down-red';
export const Header = () => {
  const [active, setActive] = React.useState(false);
  const [isHome, setIsHome] = React.useState(true);
  const [openUserMenu, setOpenUserMenu] = React.useState(false);
  const [currentRoute, setCurrentRoute] = React.useState('');
  const user = false;
  const pathname = usePathname();

  React.useEffect(() => {
    setIsHome(pathname === '/');
    setCurrentRoute(pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setActive(!active);
  };

  const toggleUserMenu = () => {
    setOpenUserMenu(!openUserMenu);
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

        {!user ? (
          <>
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
                className={`${styles.mobileMenu} ${
                  active ? styles.active : ''
                }`}
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
          </>
        ) : (
          <div className={styles.profileContainer}>
            <button
              onClick={toggleUserMenu}
              className={`${styles.profileButton} ${
                openUserMenu && styles.active
              }`}
            >
              {pathname !== '/' ? (
                <>
                  <Profile color="#000" />
                  <ArrowDownRed />
                </>
              ) : (
                <>
                  <Profile color="#fff" />
                  <ArrowDownGreen />
                </>
              )}
            </button>

            {openUserMenu && (
              <div className={styles.userMenu}>
                <Link
                  className={`${currentRoute === '/perfil' && styles.active}`}
                  href={'/perfil'}
                >
                  Perfil <span></span>
                </Link>

                <div className={styles.searchBarContainerUserProfile}>
                  <input type="text" placeholder="buscar post..." />
                  <button className={styles.searchButtonUserMenu}>
                    <Image
                      src={'/icons/search-white-icon.svg'}
                      alt="logo"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
                <button className={styles.logout}>
                  Sair <span></span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
