import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../../contexts/AuthContext";

import PATH from "../../../utils/paths";

export function GuestRouteGuard() {
    const { isAuthenticated } = useAuthContext();
    if (isAuthenticated) {
        return <Navigate to={PATH.HOME} />
    }
    
    return <Outlet />
}