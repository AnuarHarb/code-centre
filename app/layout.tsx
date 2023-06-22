import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Logo from 'assets/images/logos/logo-corto-blanco.png' 
import LogoLetras from 'assets/images/logos/logo-horizontal-blanco.png' 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Code Centre',
  description: 'Code Centre es una academia de programación donde podrás aprender a programar desde cero.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='flex bg-slate-950 px-10 justify-start align items-center'>
          <Image src={Logo} alt="C y C" height={80}/>
          <Image src={LogoLetras} alt="Code Centre" height={40}/>
        </nav>
        {children}
      </body>
    </html>
  )
}
