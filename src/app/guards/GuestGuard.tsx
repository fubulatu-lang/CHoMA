import { Navigate, Outlet } from "react-router-dom";

interface GuestGuardProps {
    isAuthenticated?: boolean;
}

export default function GuestGuard({
    isAuthenticated = false,
}: GuestGuardProps) {

    if (isAuthenticated) {

        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );

    }

    return <Outlet />;

}
