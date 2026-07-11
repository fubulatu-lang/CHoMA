import {useQuery} from "@tanstack/react-query";

import {getPayroll} from "../api/payroll.api";

export function usePayroll(id:number){

    return useQuery({

        queryKey:["payroll",id],

        queryFn:()=>getPayroll(id),

        enabled:id>0

    });

}