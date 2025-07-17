import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import type { Metadata } from 'next'
import Footer from "@/components/footer";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ethstation',
  description: 'build on ethereum',
  metadataBase: new URL('https://www.ethstation.org'),
  openGraph: {
    title: 'ethstation',
    description: 'build on ethereum',
    url: 'https://www.ethstation.org',
    siteName: 'ethstation',
    images: [
      {
        url: '/ethstation-tbn.png',
        width: 1200,
        height: 630,
        alt: 'og-image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ethstation',
    description: 'build on ethereum',
    creator: '@zxstim',
    images: ['/ethstation-tbn.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        defer
        src="https://analytics.zxstim.com/script.js"
        data-website-id="7d95153e-bd46-4aff-84b0-fb668363e6a0"
      />
      <body className={jetBrainsMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col gap-12 items-center p-6 md:p-10 pb-12">
            <SiteHeader />
              {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
