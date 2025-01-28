import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/Header';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

const clashGrotesk = localFont({
  src: [
    {
      path: './fonts/ClashGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ClashGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ClashGrotesk-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/ClashGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clashGrotesk',
});

export const metadata: Metadata = {
  title: 'Factus Blog',
  description: 'Blog de noticias gerais',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lexend.variable} ${clashGrotesk.variable} container`}>
        <div className="subContainer">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
