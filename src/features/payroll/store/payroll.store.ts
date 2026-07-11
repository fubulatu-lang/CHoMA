import {create} from "zustand";

import {Payroll} from "../api/payroll.types";

interface PayrollState{

    payrolls:Payroll[];

    selected?:Payroll;

    setPayrolls:(items:Payroll[])=>void;

    select:(item:Payroll)=>void;

    clear:()=>void;

}

export const usePayrollStore=

create<PayrollState>((set)=>({

    payrolls:[],

    selected:undefined,

    setPayrolls:(payrolls)=>

        set({payrolls}),

    select:(selected)=>

        set({selected}),

    clear:()=>

        set({

            payrolls:[],

            selected:undefined

        })

}));