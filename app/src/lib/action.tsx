'use server';


import { dbconnect } from "./db";

import User from "@/models/User";

import validateUser from "@/schemas/User.schema";
import { redirect } from "next/navigation";

export async function registerUser(prevState: any, formData: FormData) {

    const data = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')
    }

    await dbconnect().catch((err => {
        console.log(err);
    }));

    // email or user exist
    const userExist = await User.findOne({ $or: [{ email: data.email }, { username: data.username }] });
    if (userExist) {
        return { message: 'El usuario o email ya existe' };
    }

    const result = validateUser(data);
    
    if (!result.success) {
        return { message: result.error.issues[0].message };
    }

    if (data.password !== data.confirmPassword) {
        return { message: 'Las contraseñas no coinciden' };
    }

    const user = new User({
        username: data.username,
        email: data.email,
        password: data.password
    });

    user.password = await user.encryptPassword(user.password);

    await user.save();
    redirect('/');
        


    return { message: '' };
}