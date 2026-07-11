import api from "../../../lib/api";

import { Attendance } from "./attendance.types";

export async function getAttendances(){

    const {data}=await api.get<Attendance[]>("/attendance");

    return data;

}

export async function getAttendance(id:number){

    const {data}=await api.get<Attendance>(`/attendance/${id}`);

    return data;

}

export async function createAttendance(

    body:Partial<Attendance>

){

    const {data}=await api.post(

        "/attendance",

        body

    );

    return data;

}

export async function updateAttendance(

    id:number,

    body:Partial<Attendance>

){

    const {data}=await api.put(

        `/attendance/${id}`,

        body

    );

    return data;

}