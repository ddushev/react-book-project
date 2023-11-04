import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { dataFactory } from "../services/requests";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
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

    async function onEditRoomSubmit(gameInfo, roomId) {
        try {
            const editedRoom = await data.editRoom(gameInfo, roomId);
            setRooms(state => state.map(room => room._id === roomId ? editedRoom : room));
            navigate(`/available-rooms/${roomId}/details`);
        } catch (errors) {
            console.error(errors.message);
            setRoomErrors(errors)
            navigate(`/available-rooms/${roomId}/details`);
        }
    }

    async function onBookRoomClick(gameInfo, roomId) {
        try {
            const bookedRoom = await data.editRoom(gameInfo, roomId);
            setRooms(state => state.map(room => room._id === roomId ? bookedRoom : room));
            navigate(`/booking-confirmation/${roomId}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function onDeleteRoomClick(e, roomId) {
        // TODO Add confirmation dialog when delete clicked
        e.preventDefault();
        await data.deleteRoom(roomId);
        setRooms(state => state.filter(room => room._id !== roomId));
        navigate('/available-rooms');
    }

    function getRoomFromState(roomId) {
        return rooms.find(game => game._id == roomId);
    }

    async function onRoomSearchClick(searchValues) {
        const { name, price, adult, child } = searchValues;
        const searchQuery = `search=${name}&price=${price}&adult=${adult}&child=${child}`
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