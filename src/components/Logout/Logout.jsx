import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export function Logout() {
    const { onLogout } = useAuthContext();
    useEffect(() => {
        onLogout();
    }, [])
    return (
        <Navigate to="/" />
    );
}