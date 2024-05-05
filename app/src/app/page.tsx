import styles from './style/main.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<section className={ `w-full h-[85vh] pt-[8vh] bg-white ${styles.bgcontent} ` } >
            </section>
            <section className='absolute top-0  flex flex-col items-center w-full '>
                <div className="mt-[35dvh] text-center w-full  ">
                    <h1 className="text-4xl font-bold  ">Cinema</h1>
                    <p className="text-lg ">La mejor plataforma para ver tus peliculas favoritas</p>
                </div>
                
                    
                <Link href="/movies">
                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2  mt-5">Ver peliculas</button>
                </Link>
                
            </section>
		</main>
	);
}
