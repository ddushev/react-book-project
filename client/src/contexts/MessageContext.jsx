import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "./AuthContext";
import { dataFactory } from "../services/requests";


const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
    const { token, userId } = useAuthContext();
    const [messages, setMessages] = useState([]);
    const [messageErrors, setMessageErrors] = useState([]);
    const data = dataFactory(token, userId);
    const navigate = useNavigate();
    useEffect(() => {
        data.getAllMessages()
            .then(data => setMessages(Object.values(data)));
    }, []);

    const context = {
        messages
    }

    return (
        <>
            <MessageContext.Provider value={context}>
                {children}
            </MessageContext.Provider>
        </>
    );
}

export const useMessageContext = () => {
    return useContext(MessageContext);
}