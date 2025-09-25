import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Header } from "./components";
import MoviesProvider from "./context/Movies/MoviesProvider";
import NetworkProvider from "./providers/NetworkProvider";

export const metadata: Metadata = {
  title: "Movie Search",
  description: "Movie Search Application",
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NetworkProvider>
          <MoviesProvider>
            <Header />
            <main>
              {children}
            </main>
          </MoviesProvider>
        </NetworkProvider>
      </body>
    </html>
  );
}
