import {useQuery} from "@tanstack/react-query";

import {getReport} from "../api/reports.api";

export function useReport(id:number){

    return useQuery({

        queryKey:["report",id],

        queryFn:()=>getReport(id),

        enabled:id>0

    });

}