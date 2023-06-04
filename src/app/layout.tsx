'use client'
import {Inter, Poppins} from 'next/font/google'
import Header from '@/components/Header'
import StyledComponentsRegistry from './lib/registry'
import GlobalStyle from '@/styles/globalStyles'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['600', '800'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${inter.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning={true}>
        <GlobalStyle />
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
