import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Portal Viagens</div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/destinos">Destinos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>© 2025 Portal Viagens. Todos os direitos reservados.</p>
        <div className={styles.social}>
          <a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">Twitter</a>
        </div>
      </footer>
    </>
  );
}
