import {z} from "zod";

export const PatientSchema=z.object({

firstName:z.string().min(2),

lastName:z.string().min(2),

gender:z.enum(["Male","Female"]),

dateOfBirth:z.string(),

phone:z.string(),

address:z.string()

});