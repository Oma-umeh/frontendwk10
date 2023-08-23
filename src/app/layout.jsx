import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'
import { Handjet } from 'next/font/google'

// const inter = Handjet({ subsets: ['latin'] })

export const metadata = {
  title: 'my first react class',
  description: 'this is react and nextjs',
}

export default function RootLayout({ children }) {
  const myName = 'helen'
  return (
    <html lang="en">
      <body>
      {/* <Navbar/> */}
      <main className='text-[50px] h-[600px]'>
        {children}
      </main>
      {/* <Footer /> */}
        </body>
    </html>
  )
}
