'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useUserStore } from '@/store/user-store';
import formatLink from '@/functions/formatLink';

export default function PerfilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [path, setPath] = React.useState('');
  const { user } = useUserStore();
  const pathname = usePathname();

  React.useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  if (!user) {
    return null;
  }
  return (
    <section className={styles.perfilContainer}>
      <div className={`${styles.perfilBox}`}>
        <div className={`${styles.perfilImage}`}>
          <Image
            src={formatLink(`users/profile`, user?.profilePicture)}
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={`${styles.perfilInfos} subContainer`}>
        <h1 className={styles.profileName}>{user.name}</h1>
        <ul className={styles.perfilLinks}>
          <li className={path === '/perfil' ? styles.active : ''}>
            <Link href={'/perfil'}>
              <Image
                src="/icons/favorites-posts-icon.svg"
                alt=""
                width={40}
                height={40}
              />
            </Link>
          </li>
          <li className={path === '/perfil/meus-posts' ? styles.active : ''}>
            <Link href={'/perfil/meus-posts'}>
              <Image
                src="/icons/blogger-posts-icon.svg"
                alt=""
                width={40}
                height={40}
              />
            </Link>
          </li>
          <li className={path === '/perfil/criar-post' ? styles.active : ''}>
            <Link href={'/perfil/criar-post'}>
              <Image
                src="/icons/add-post-icon.svg"
                alt=""
                width={40}
                height={40}
              />
            </Link>
          </li>
          <li>
            <button>
              <Image
                src="/icons/logout-icon.svg"
                alt=""
                width={40}
                height={40}
              />
            </button>
          </li>
        </ul>
      </div>
      {children}
    </section>
  );
}
