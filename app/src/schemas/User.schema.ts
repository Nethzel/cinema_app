import { z } from 'zod';


const userSchema = z.object( {

    username: z.string(
        {
            required_error: 'El nombre de usuario es requerido'
        }
    ).min(3),
    email: z.string().email({
        message: 'El email es requerido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    })
} )


export default function validateUser( data: any ) {
    return userSchema.safeParse( data );
}