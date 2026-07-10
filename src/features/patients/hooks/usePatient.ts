import {useQuery} from "@tanstack/react-query";

import {getPatient} from "../api/patients.api";

export function usePatient(id:number){

return useQuery({

queryKey:["patient",id],

queryFn:()=>getPatient(id)

});

}