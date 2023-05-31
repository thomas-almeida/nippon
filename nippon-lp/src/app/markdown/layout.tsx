import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'O que é Markdown📝 e Como Escrever Notas no Nippon🍥',
  description: 'Com o Nippon 🍥 você pode escrever suas anotações com markdown usando uma interface incrivelmente prática e feita para que o seu foco na hora de digitar suas notas e documentações seja otimizado ao máximo.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
