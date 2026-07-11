export type UserRole =
    | "ADMIN"
    | "DOCTOR"
    | "NURSE"
    | "PHARMACIST"
    | "LABORATORY"
    | "RECEPTIONIST"
    | "ACCOUNTANT"
    | "HR"
    | "SUPER_ADMIN";

export interface AuthUser {

    id:number;

    email:string;

    firstName:string;

    lastName:string;

    role:UserRole;

    isActive:boolean;

}

export interface LoginDto{

    email:string;

    password:string;

}

export interface RegisterDto{

    firstName:string;

    lastName:string;

    email:string;

    password:string;

}
