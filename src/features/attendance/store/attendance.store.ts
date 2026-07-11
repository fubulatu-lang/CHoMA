import {create} from "zustand";

import {Attendance} from "../api/attendance.types";

interface AttendanceState{

    attendances:Attendance[];

    selected?:Attendance;

    setAttendances:(items:Attendance[])=>void;

    select:(item:Attendance)=>void;

}

export const useAttendanceStore=

create<AttendanceState>((set)=>({

    attendances:[],

    selected:undefined,

    setAttendances:(attendances)=>

        set({attendances}),

    select:(selected)=>

        set({selected})

}));