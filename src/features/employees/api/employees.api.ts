import api from "../../../lib/api";

import { Employee } from "./employee.types";

export async function getEmployees(){

    const {data}=await api.get<Employee[]>("/employees");

    return data;

}

export async function getEmployee(id:number){

    const {data}=await api.get<Employee>(`/employees/${id}`);

    return data;

}

export async function createEmployee(body:Partial<Employee>){

    const {data}=await api.post("/employees",body);

    return data;

}

export async function updateEmployee(

    id:number,

    body:Partial<Employee>

){

    const {data}=await api.put(

        `/employees/${id}`,

        body

    );

    return data;

}

export async function deleteEmployee(id:number){

    const {data}=await api.delete(

        `/employees/${id}`

    );

    return data;

}