import {useQuery} from "@tanstack/react-query";

import {getEmployees} from "../api/employees.api";

export function useEmployees(){

    return useQuery({

        queryKey:["employees"],

        queryFn:getEmployees

    });

}