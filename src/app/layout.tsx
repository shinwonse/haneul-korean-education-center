import { Header } from '@/components/header';
import { cn } from '@/lib/utils';
import '@fontsource/pretendard'; // 기본 weight 400
import '@fontsource/pretendard/300.css'; // Light
import '@fontsource/pretendard/500.css'; // Medium
import '@fontsource/pretendard/600.css'; // SemiBold
import '@fontsource/pretendard/700.css'; // Bold
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '하늘국어영재원',
  description: '하늘국어영재원',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={cn('h-full')}>
      <body className={cn('antialiased h-full flex flex-col')}>
        <Header />
        <main className={cn('flex-1')}>{children}</main>
      </body>
    </html>
  );
}
