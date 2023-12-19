import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import  Header  from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diego Max',
  description: 'Melhor filme você encontra aqui.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <Header/>
        <main className='main'>
        {children}
        </main>
      </body>
    </html>
  )
}
