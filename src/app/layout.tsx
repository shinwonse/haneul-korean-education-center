import { Header } from '@/components/header';
import { cn } from '@/lib/utils';
import '@fontsource/pretendard'; // 기본 weight 400
import '@fontsource/pretendard/300.css'; // Light
import '@fontsource/pretendard/500.css'; // Medium
import '@fontsource/pretendard/600.css'; // SemiBold
import '@fontsource/pretendard/700.css'; // Bold
import { StagewiseToolbar } from '@stagewise/toolbar-next';
import type { Metadata } from 'next';
import './globals.css';

const stagewiseConfig = {
  plugins: [],
};

export const metadata: Metadata = {
  title: '하늘국어영재원',
  description: '하늘국어영재원 - 상위 1%의 길을 열다',
  openGraph: {
    title: '하늘국어영재원',
    description: '하늘국어영재원 - 상위 1%의 길을 열다',
    type: 'website',
    siteName: '하늘국어영재원',
    images: [
      {
        url: '/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: '하늘국어영재원',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '하늘국어영재원',
    description: '하늘국어영재원 - 상위 1%의 길을 열다',
    images: ['/opengraph.jpg'],
  },
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
        {process.env.NODE_ENV === 'development' && (
          <StagewiseToolbar config={stagewiseConfig} />
        )}
      </body>
    </html>
  );
}
