import { Navigate, Outlet, useLocation } from "react-router-dom";

interface AuthGuardProps {
    isAuthenticated?: boolean;
}

export default function AuthGuard({
    isAuthenticated = false,
}: AuthGuardProps) {

    const location = useLocation();

    if (!isAuthenticated) {

        return (
            <Navigate
                to="/login"
                replace
                state={{
                    from: location,
                }}
            />
        );

    }

    return <Outlet />;

}
