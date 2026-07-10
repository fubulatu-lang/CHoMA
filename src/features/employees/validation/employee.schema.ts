import {z} from "zod";

export const EmployeeSchema=z.object({

    firstName:z.string().min(2),

    lastName:z.string().min(2),

    email:z.string().email(),

    phone:z.string().min(10),

    department:z.string().min(2),

    designation:z.string().min(2)

});

export type EmployeeForm=

z.infer<typeof EmployeeSchema>;