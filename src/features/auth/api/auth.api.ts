import axios from "axios";

import {
LoginRequest,
RegisterRequest
} from "../types";

const api=axios.create({

baseURL:"/api/auth"

});

export async function login(
data:LoginRequest
){

const response=await api.post(

"/login",

data

);

return response.data;

}

export async function register(

data:RegisterRequest

){

const response=await api.post(

"/register",

data

);

return response.data;

}