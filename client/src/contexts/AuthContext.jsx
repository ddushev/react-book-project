import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";

import { dataFactory } from "../services/requests"
import { useLocalStorage } from "../hooks/useLocalStorage";
import { errorParser } from "../utils/errorParser";


export const AuthContext = createContext();

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
        } catch (error) {
            setAuthErrors(errorParser(error));
            navigate('/sign-in');
        }
    }

    async function onLogout() {
        try {
            await data.logout();
            localStorage.removeItem('key');
            setAuth({});
            navigate('/');
        } catch (error) {
            console.error(error.message);
        }
    }

    async function onRegisterSubmit(registerInfo) {
        try {
            const { repeatPassword, ...registerData } = registerInfo;
            if (repeatPassword != registerData.password) {
                throw new Error('Passwords don\'t match!');
            }
            const registerdInfo = await data.register(registerData)
            const { password, _createdOn, ...registeredData } = registerdInfo;
            setAuth(registeredData);
            navigate('/available-rooms');
        } catch (error) {
            console.error(error.message);
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