'use client';


import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


import { usePathname } from 'next/navigation';
import Navbar from "./components/Navbar";

export default function RootLayout({ children,  }: { children: React.ReactNode; }) {


  const pathname = usePathname();


  return (
    <html lang="es">

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cinema</title>
      </head>

      <body className={ `${inter.className}` }>
        

        { pathname == '/login' ? '' :  <Navbar /> }
        {children}

      </body>
    </html>
  );
}
