import type { Metadata } from 'next';
import { HeaderWrapper, Footer } from '@/shared/components/shared';

export const metadata: Metadata = {
  title: 'Kinomedia',
  description: 'Онлайн-кинотеатр Kinomedia с более чем 960 тысячами фильмов',
};

export default function HomeLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <HeaderWrapper />
      {children}
      <Footer />
      {auth}
    </main>
  );
}
