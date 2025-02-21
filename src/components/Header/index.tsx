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
import { useUserStore } from '@/store/user-store';
import { SearchResult } from '../search-result';
import { useSearch } from '@/hooks/use-search';
import { PostService } from '@/services/post-service';
import { set } from 'react-hook-form';
import { SearchIcon } from '@/utils/icons-components/search-icon';
import { AuthService } from '@/services/auth-service';
export const Header = () => {
  const [active, setActive] = React.useState(false);
  const [isHome, setIsHome] = React.useState(true);
  const [openUserMenu, setOpenUserMenu] = React.useState(false);
  const [currentRoute, setCurrentRoute] = React.useState('');
  const { search, setSearch, result, loading, error } = useSearch({
    searchFunction: PostService.getPostsWithPagination,
  });
  const { user, removeUser } = useUserStore();
  const pathname = usePathname();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLogout = () => {
    removeUser();
    AuthService.logout();
    window.location.href = '/';
  };

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
          <input
            className={`${isHome ? '' : styles.inputDaker}`}
            onChange={handleSearch}
            type="text"
            placeholder="buscar post..."
          />
          <button className={`${isHome ? '' : styles.searchDaker}`}>
            <SearchIcon />
          </button>
          {result && <SearchResult onClick={setSearch} posts={result.data} />}
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
                  <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="buscar post..."
                  />
                  <button>
                    <Image
                      src={'/icons/search-white-icon.svg'}
                      alt="logo"
                      width={20}
                      height={20}
                    />
                  </button>
                  {result && (
                    <SearchResult onClick={setSearch} posts={result.data} />
                  )}
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
                  <Profile
                    name={user.name}
                    imageUrl={user.profilePicture}
                    color="#000"
                  />
                  <ArrowDownRed />
                </>
              ) : (
                <>
                  <Profile
                    name={user.name}
                    imageUrl={user.profilePicture}
                    color="#fff"
                  />
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

                <button onClick={handleLogout} className={styles.logout}>
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
