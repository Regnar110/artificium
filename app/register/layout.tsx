import { Inter } from 'next/font/google'

//LAYOUT jet plikiem, który zawiera wspólne dla wszystkich stron danej ścieżki aplikacji elementy tj. nawigacja lub stopka

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Artificium Register',
  description: 'Register to artificium',
}

export default function RootLayout({ // tutaj mamy przykład jak umieszczać server component w client component. Jest to jedyny sposób - tj. przekazanie SC jako props do CC
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
