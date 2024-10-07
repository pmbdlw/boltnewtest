import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '前沿科技门户',
    template: '%s | 前沿科技门户',
  },
  description: '探索AI、VR/AR和最新科技趋势',
  keywords: ['AI', 'VR', 'AR', '科技', '人工智能', '虚拟现实', '增强现实'],
  authors: [{ name: '前沿科技门户团队' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://your-website-url.com',
    siteName: '前沿科技门户',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}