import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "./AuthContext";
import { dataFactory } from "../services/requests";
import { validateMessages } from "../utils/validateMessages";
import { useRoomContext } from "./RoomContext";
import { errorParser } from "../utils/errorParser";


const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
    const { token, userId } = useAuthContext();
    const { getRoomFromState } = useRoomContext();
    const [messageErrors, setMessageErrors] = useState([]);
    const data = dataFactory(token, userId);
    const navigate = useNavigate();

    async function onSendMessageSubmit(messageInfo) {
        try {
            validateMessages(messageInfo);
            await data.createMessage(messageInfo);
            navigate(`/reservation-confirmed/${messageInfo.roomId}`);
        } catch (errors) {
            setMessageErrors(errorParser(errors));
            const room = getRoomFromState(messageInfo.roomId);
            if (room._ownerId == userId) {
                navigate(`/reservation-confirmed/${messageInfo.roomId}/send-message-to-guest`);
            } else {
                navigate(`/reservation-confirmed/${messageInfo.roomId}/send-message-to-host`);
            }
        }
    }

    async function getRoomMessages(roomId) {
        try {
            const roomMessages = await data.getMessagesPerRoom(roomId);
            return roomMessages;
        } catch (errors) {
            console.error(errors.message);
        }
    }

    const context = {
        messageErrors,
        setMessageErrors,
        onSendMessageSubmit,
        getRoomMessages
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