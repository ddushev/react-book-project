import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "./AuthContext";
import { dataFactory } from "../services/requests";
import { validateRoom } from "../utils/validateRoom";


const RoomContext = createContext();

export const RoomContextProvider = ({ children }) => {
    const { token } = useAuthContext();
    const [rooms, setRooms] = useState([]);
    const [roomErrors, setRoomErrors] = useState([]);
    const data = dataFactory(token);
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
            setRoomErrors(errors)
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
            setRoomErrors(errors);
            navigate(`/available-rooms/${roomId}/edit`);
        }
    }

    async function onBookRoomClick(roomInfo, roomId, navigateTo) {
        try {
            const bookedRoom = await data.editRoom(roomInfo, roomId);
            setRooms(state => state.map(room => room._id === roomId ? bookedRoom : room));
            if (navigateTo) {
                navigate(navigateTo);
            } else {
                navigate(`/booking-confirmation/${roomId}`);
            }
        } catch (errors) {
            console.error(errors.message);
        }
    }

    async function onDeleteRoomClick(e, roomId) {
        // TODO Add confirmation dialog when delete clicked
        try {
            e.preventDefault();
            await data.deleteRoom(roomId);
            setRooms(state => state.filter(room => room._id !== roomId));
            navigate('/available-rooms');
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
        onBookRoomClick,
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