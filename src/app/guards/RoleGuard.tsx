import { Navigate, Outlet } from "react-router-dom";

export type UserRole =
    | "ADMIN"
    | "DOCTOR"
    | "NURSE"
    | "LAB"
    | "PHARMACY"
    | "HR"
    | "CASHIER";

interface RoleGuardProps {

    allowedRoles: UserRole[];

    currentRole?: UserRole;

}

export default function RoleGuard({

    allowedRoles,

    currentRole,

}: RoleGuardProps) {

    if (
        !currentRole ||
        !allowedRoles.includes(currentRole)
    ) {

        return (
            <Navigate
                to="/unauthorized"
                replace
            />
        );

    }

    return <Outlet />;

}
