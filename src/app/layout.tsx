import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'CP Marketing',
  description: 'Uma agência de marketing digital totalmente integrada.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${montserrat.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <Script
          type="text/javascript"
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/4b29f569-0782-4731-9daa-cd08177a5ae8-loader.js"
          async
        />
      </body>
    </html>
  );
}
