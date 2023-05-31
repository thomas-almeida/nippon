import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contribuir',
  description: 'considere se tornar um apoiador do projeto e ter seu nome destacado na página inicial deste site e nas redes sociais do Nippon.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
