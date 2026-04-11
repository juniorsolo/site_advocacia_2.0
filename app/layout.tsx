import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Dr. Eduardo Gonçalves advocacia Trabalhista & Família',
  description:
    'Advocacia especializada em Direito Trabalhista e de Família. Mais de 10 anos de experiência. Atendimento personalizado e comprometido com seus direitos.',
};

export const viewport: Viewport = {
  themeColor: '#0a1628',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
