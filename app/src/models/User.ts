import { getModelForClass, prop } from "@typegoose/typegoose";
import mongoose from 'mongoose'
import bcrypt from "bcrypt";

class User {

    @prop()
    public username?: string;

    @prop()
    public email?: string;

    @prop({ required: true })
    public password!: string;


    public async comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }

    public async encryptPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }


}

export default mongoose.models.User || getModelForClass(User) ;