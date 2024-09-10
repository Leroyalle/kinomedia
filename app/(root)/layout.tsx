import type { Metadata } from 'next';
import { Footer, Header } from '@/shared/components/shared';

export const metadata: Metadata = {
  title: 'Kinomedia',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
