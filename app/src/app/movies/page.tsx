'use client'
import { useEffect, useState } from "react";

interface IMovies {

    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    original_title: string;
    release_date: string;
}


export default function Home() {

    const [movies, setMovies] = useState<Array<IMovies>>([]);

    useEffect(  () => {
        const params = new URLSearchParams('');
        params.set('query', 'Star Wars');
        params.set('language', 'es-MX')

        fetch('https://api.themoviedb.org/3/search/movie?' + params.toString(),
            {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGMxMzk5ZjRhMGQ4NWVjZjZiMmM1ODAzODI0NTFkNCIsInN1YiI6IjY2Mzc0ZDY2OWE2NGMxMDEyNjNmMjQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZiU5wNPZb4HnfGdMYBKE1nhSSP_6Jb1a1Zg02yKZnNI'
                }
            }

        ).then( response => response.json() ).then( data => {

            const toArrayData = Object.values(data);
            const movieData = toArrayData.find( (value) => Array.isArray(value) );
            if( movieData ) setMovies( (movieData as Array<IMovies>)) ;
        });



    }, [] )

    return (
        <main className="pt-[8vh] mb-2">
            

            <section className="md:grid lg:grid-cols-4  lg:gap-4 md:grid-cols-2  md:gap-2 md:px-[17vw] ">

                
                
                {
                    movies.map( movie => {

                        return (
                            <article key={movie.id} className=" cursor-pointer group h-[80vh] w-[85vw]  lg:w-[15vw] md:w-[30vw] md:h-[50vh] sm:w-[60vw] sm:h-[80vh] sm:mx-[5vw] rounded-lg border bg-card text-card-foreground shadow-sm  mt-2  ml-[5vw] md:ml-0  " >
                                <div  className="h-[100%] bg-slate-50" style={  { backgroundImage: `url( https://image.tmdb.org/t/p/w300${ movie.poster_path }  )`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } } >
                                    <div className="bg-black h-full w-full flex flex-col p-2 pb-10 px-5"
                                    
                                        style={
                                            {
                                                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)'
                                            }
                                        }
                                    >
                                        <h1 className="text-lg font-bold text-white mt-auto ">
                                            { movie.original_title }
                                        </h1>
                                        
                                        
                                        <p className="overflow-hidden md:h-0 md:group-hover:h-5 transition-all">
                                            { `Estreno en ${ new Date(movie.release_date).toLocaleDateString( "es-MX", { weekday:'long',  month:'long', year:'numeric' } ) }` }
                                        </p>


                                    </div>
                                </div>
                            </article>
                        )

                        

                    })
                }


            
            </section>
        </main>
    );
}