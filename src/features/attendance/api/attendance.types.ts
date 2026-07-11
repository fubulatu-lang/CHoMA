export type AttendanceStatus =
    | "PRESENT"
    | "ABSENT"
    | "LATE"
    | "LEAVE";

export interface Attendance {

    id:number;

    employeeId:number;

    employeeName:string;

    attendanceDate:string;

    checkIn:string;

    checkOut?:string;

    status:AttendanceStatus;

    remarks?:string;

    createdAt:string;

}