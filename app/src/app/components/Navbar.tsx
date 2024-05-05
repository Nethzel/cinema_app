'use client';

import Link from 'next/link'
import Image from "next/image";
import logo from '../assets/logo.png'
import { usePathname } from 'next/navigation'
import { useState } from 'react';


export default function Navbar() {

    const pathname = usePathname();

    const [ isNavbarOpen, setIsNavbarOpen ] = useState<boolean>(false);

    const handleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }


    const hideIsNavbarOpen = () => {
        if( isNavbarOpen ) {
            setIsNavbarOpen(false);
        }
    }

	return (
        // 
		<nav className={  ` ${pathname == '/' ?  isNavbarOpen ? 'border border-input bg-background border-b b ' : 'bg-transparent '  : 'border border-input bg-background border-b b ' } fixed w-full z-20 top-0 start-0` }>
			<div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
				<a href="#" className="flex items-center space-x-1 ">
					
                    <Image src={logo} alt="Logo" width={40} />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Movies
                    </span>
				</a>
				<div className="flex md:order-2 space-x-3 md:space-x-0 ml-auto ">

                    <Link href='/login'>
                        <button type="button" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2">
                            Iniciar sesión
                        </button>
                    </Link>
					
					<button onClick={ handleNavbar } type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none  dark:text-gray-400 " >
						<span className="sr-only">Open main menu</span>
						<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
				</div>

				<div className={ `${ isNavbarOpen ? 'h-[20vh] sm:opacity-[100%]' : 'h-[0vh]  sm:pointer-events-none md:pointer-events-auto opacity-0 md:opacity-[100%] '  } transition-all duration-200 items-center justify-between  w-full md:flex md:w-auto md:order-1` } id="navbar-sticky">
					<ul className="ml-[5vw] flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8  md:flex-row md:mt-0 md:border-0 ">
						<li>
							<Link href="/" onClick={  hideIsNavbarOpen   } className={ `${pathname == '/' ? ' text-blue-500 ' : '' } block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-slate-400 transition-all ` } aria-current="page">
								Inicio
							</Link>
						</li>
                        <li>
                            <Link href="/movies" onClick={  hideIsNavbarOpen   } className={ `${pathname == '/movies' ? ' text-blue-500 ' : '' } block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-slate-400 transition-all` } aria-current="page">
								Peliculas
							</Link>
                        </li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
