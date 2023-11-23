import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "./AuthContext";
import { dataFactory } from "../services/dataRequests";
import { validateRoom } from "../utils/validateRoom";
import { errorParser } from "../utils/errorParser";


export const RoomContext = createContext();

export const RoomContextProvider = ({ children }) => {
    const { token, userId } = useAuthContext();
    const [rooms, setRooms] = useState([]);
    const [roomErrors, setRoomErrors] = useState([]);
    const data = dataFactory(token, userId);
    const navigate = useNavigate();
    useEffect(() => {
        data.getRooms()
            .then(data => setRooms(Object.values(data)));
    }, []);

    async function onAddRoomSubmit(roomInfo) {
        try {
            validateRoom(roomInfo);
            const newRoom = await data.createRoom(roomInfo);
            setRooms(state => [...state, newRoom]);
            navigate('/my-published-rooms');
        } catch (errors) {
            setRoomErrors(errorParser(errors));
            navigate('/add-room');
        }
    }

    async function onEditRoomSubmit(roomInfo, roomId) {
        try {
            validateRoom(roomInfo)
            const editedRoom = await data.editRoom(roomInfo, roomId);
            setRooms(state => state.map(room => room._id === roomId ? editedRoom : room));

            navigate(`/available-rooms/${roomId}/details`);
        } catch (errors) {
            setRoomErrors(errorParser(errors));
            navigate(`/available-rooms/${roomId}/edit`);
        }
    }

    async function onBookRoomInteract(roomInfo, roomId, navigateTo) {
        try {
            const bookedRoom = await data.editRoom(roomInfo, roomId);
            setRooms(state => state.map(room => room._id === roomId ? bookedRoom : room));
            navigate(navigateTo);
            
        } catch (errors) {
            console.error(errors.message);
        }
    }

    async function onConfirmRoomClick(roomInfo, roomId, navigateTo) {
        try {
            const confirmedRoom = await data.editRoom(roomInfo, roomId);
            setRooms(state => state.map(room => room._id === roomId ? confirmedRoom : room));
            navigate(navigateTo);

        } catch (errors) {
            console.error(errors.message);
        }
    }

    async function onDeleteRoomClick(e, roomId) {
        try {
            e.preventDefault();
            await data.deleteRoom(roomId);
            setRooms(state => state.filter(room => room._id !== roomId));
            navigate('/my-published-rooms');
        } catch (errors) {
            console.error(errors.message);
        }

    }

    function getRoomFromState(roomId) {
        return rooms.find(game => game._id == roomId);
    }

    async function onRoomSearchClick(searchValues) {
        const { location, price, adult, child } = searchValues;
        const searchQuery = `location=${location}&price=${price}&adult=${adult}&child=${child}`
        navigate(`/available-rooms?${searchQuery}`);
    }

    const context = {
        rooms,
        roomErrors,
        setRoomErrors,
        onAddRoomSubmit,
        onEditRoomSubmit,
        onBookRoomInteract,
        onConfirmRoomClick,
        onDeleteRoomClick,
        getRoomFromState,
        onRoomSearchClick
    }

    return (
        <>
            <RoomContext.Provider value={context}>
                {children}
            </RoomContext.Provider>
        </>
    );
}

export const useRoomContext = () => {
    return useContext(RoomContext);
}