import {db} from "../../database";

export async function findUserByEmail(

    email:string

){

    return db.query.users.findFirst({

        where:(users,{eq})=>

            eq(users.email,email)

    });

}

export async function createUser(

    values:unknown

){

    return db.insert(

        db.schema.users

    ).values(values);

}
