import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function hashPassword(

    password:string

){

    return bcrypt.hash(

        password,

        12

    );

}

export async function comparePassword(

    password:string,

    hash:string

){

    return bcrypt.compare(

        password,

        hash

    );

}

export function signToken(

    payload:object

){

    return jwt.sign(

        payload,

        process.env.JWT_SECRET!,

        {

            expiresIn:"12h"

        }

    );

}
