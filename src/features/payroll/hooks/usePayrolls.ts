import {useQuery} from "@tanstack/react-query";

import {getPayrolls} from "../api/payroll.api";

export function usePayrolls(){

    return useQuery({

        queryKey:["payrolls"],

        queryFn:getPayrolls

    });

}