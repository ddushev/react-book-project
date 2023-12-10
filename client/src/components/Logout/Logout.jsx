import { Navigate } from "react-router-dom";
import { useEffect } from "react";

import { useAuthContext } from "../../contexts/AuthContext";

import PATH from "../../utils/paths";

export function Logout() {
    const { onLogout } = useAuthContext();
    useEffect(() => {
        onLogout();
    }, [])
    return (
        <Navigate to={PATH.HOME} />
    );
}