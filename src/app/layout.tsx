import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import { ChallengeProvider } from '../context/ChallengeContext';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ABTalks Redesign',
  description: '60-day coding challenge platform for Indian college students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.className} min-h-screen bg-neutral-50 text-neutral-900 antialiased`}>
        <ChallengeProvider>
          {children}
        </ChallengeProvider>
      </body>
    </html>
  );
}
