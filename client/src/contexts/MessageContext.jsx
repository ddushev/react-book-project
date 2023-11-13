import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "./AuthContext";
import { dataFactory } from "../services/requests";
import { validateMessages } from "../utils/validateMessages";
import { useRoomContext } from "./RoomContext";


const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
    const { token, userId } = useAuthContext();
    const { getRoomFromState } = useRoomContext();
    const [messages, setMessages] = useState([]);
    const [messageErrors, setMessageErrors] = useState([]);
    const data = dataFactory(token, userId);
    const navigate = useNavigate();
    useEffect(() => {
        data.getAllMessages()
            .then(data => setMessages(Object.values(data)));
    }, []);

    async function onSendMessageSubmit(messageInfo) {
        try {
            validateMessages(messageInfo);
            const newMessage = await data.createMessage(messageInfo);
            setMessages(state => [...state, newMessage]);
            navigate(`/reservation-confirmed/${messageInfo.roomId}`);
        } catch (errors) {
            setMessageErrors(errors);
            const room = getRoomFromState(messageInfo.roomId);
            if (room._ownerId == userId) {
                navigate(`/reservation-confirmed/${messageInfo.roomId}/send-message-to-guest`);
            } else {
                navigate(`/reservation-confirmed/${messageInfo.roomId}/send-message-to-host`);
            }
        }
    }

    const context = {
        messages,
        messageErrors,
        setMessageErrors,
        onSendMessageSubmit
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