export type PayrollStatus =
    | "PENDING"
    | "PROCESSING"
    | "PAID"
    | "FAILED";

export interface Payroll {

    id:number;

    employeeId:number;

    employeeName:string;

    payrollMonth:string;

    basicSalary:number;

    allowances:number;

    deductions:number;

    netSalary:number;

    paymentDate?:string;

    status:PayrollStatus;

    createdAt:string;

}