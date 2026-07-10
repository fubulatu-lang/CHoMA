import {createBrowserRouter} from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";

import RegisterPage from "../features/auth/pages/RegisterPage";

import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";

export const router=createBrowserRouter([

{

path:"/",

element:<LoginPage/>

},

{

path:"/register",

element:<RegisterPage/>

},

{

path:"/forgot-password",

element:<ForgotPasswordPage/>

}

]);