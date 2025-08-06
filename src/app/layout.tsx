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
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1226394948614085&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${montserrat.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1226394948614085');
              fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          type="text/javascript"
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/4b29f569-0782-4731-9daa-cd08177a5ae8-loader.js"
          async
        />
      </body>
    </html>
  );
}
