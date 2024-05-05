'use client';
import { registerUser } from "@/lib/action";
import { useFormState } from "react-dom";
import Alert from "../components/Alert";

const initialState = {
    message: '',
};

export default function Registro() {



    
    const [state, formAction] = useFormState(registerUser, initialState)
	return (
		<main>
			<section className="w-full h-[99vh] bg-background flex flex-col items-center justify-center">
				<article className="rounded-lg border bg-card text-card-foreground shadow-sm mt-2 sm:w-[40vw] md:w-[40vw] lg:w-[20vw]  md:h-[45vh] ">
					<form  className="p-6" action={ formAction }>
                        <h1 className="text-3xl text-center">Registro </h1>
                        <div className="mb-4 mt-5">
                            <input
                                className=" flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                name="username"
                                type="text"
                                placeholder="Usuario"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className=" flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                name="email"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className=" flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                name="password"
                                type="password"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className=" flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirmar contraseña"
                            />
                        </div>
                        <div className="w-full flex pr-1">
                            <button
                                className="h-9 px-3 ml-auto bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                            >
                                Registrarse
                            </button>
                        </div>
					</form>
				</article>
                {
                    state.message && <Alert message={state?.message} />
                }
			</section>
		</main>
	);
}
