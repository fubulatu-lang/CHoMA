export type EmployeeStatus =
    | "ACTIVE"
    | "ON_LEAVE"
    | "SUSPENDED"
    | "TERMINATED";

export interface Employee {

    id:number;

    employeeNumber:string;

    firstName:string;

    middleName?:string;

    lastName:string;

    gender:"Male"|"Female";

    email:string;

    phone:string;

    department:string;

    designation:string;

    employmentDate:string;

    status:EmployeeStatus;

    createdAt:string;

}