import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext"

export const UserRouteGuard = () => {
    const { isAuthenticated } = useAuthContext();
    
    if (!isAuthenticated) {
        return <Navigate to='/sign-in' />
    }

    return <Outlet />
}