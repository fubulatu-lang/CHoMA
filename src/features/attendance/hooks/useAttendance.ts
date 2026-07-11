import {useQuery} from "@tanstack/react-query";

import {getAttendance} from "../api/attendance.api";

export function useAttendance(id:number){

    return useQuery({

        queryKey:["attendance",id],

        queryFn:()=>getAttendance(id),

        enabled:id>0

    });

}