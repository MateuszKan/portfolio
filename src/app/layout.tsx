import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Nunito } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Nunito({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: "Mateusz Kantarewicz",
  description: "Software engineer based in London, United Kingdom. Passionate about learning new technologies and sharing knowledge with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
    <body
      className={cn(
        'flex min-h-screen flex-col font-sans antialiased', inter.variable, playfair.variable
      )}
    >
      <ThemeProvider  attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </ThemeProvider>
    </body>
  </html>
  );
}
