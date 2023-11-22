import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";

import { dataFactory } from "../services/dataRequests"
import { useLocalStorage } from "../hooks/useLocalStorage";
import { errorParser } from "../utils/errorParser";
import { validateRegister } from "../utils/validateRegister";


export const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthContextProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [authErrors, setAuthErrors] = useState([]);
    const navigate = useNavigate();
    const data = dataFactory(auth.accessToken);
    async function onLoginSubmit(loginInfo) {
        try {
            const loginInfoResponse = await data.login(loginInfo);
            const { password, _createdOn, ...loginData } = loginInfoResponse;
            setAuth(loginData);
            navigate('/available-rooms');
        } catch (errors) {
            setAuthErrors(errorParser(errors));
            navigate('/sign-in');
        }
    }

    async function onLogout() {
        try {
            await data.logout();
            localStorage.removeItem('key');
            setAuth({});
            navigate('/');
        } catch (errors) {
            localStorage.removeItem('key');
            setAuth({});
            navigate('/');
        }
    }

    async function onRegisterSubmit(registerInfo) {
        try {
            validateRegister(registerInfo);
            const { repeatPassword, ...registerData } = registerInfo;
            const registerdInfo = await data.register(registerData)
            const { password, _createdOn, ...registeredData } = registerdInfo;
            setAuth(registeredData);
            navigate('/available-rooms');
        } catch (errors) {
            setAuthErrors(errorParser(errors));
            navigate('/sign-up');
        }
    }

    const context = {
        authErrors,
        setAuthErrors,
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        token: auth.accessToken,
        userEmail: auth.email,
        userId: auth._id,
        userImg: auth.imageUrl,
        username: `${auth.firstName} ${auth.lastName}`,
        isAuthenticated: !!auth.accessToken
    }
    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}