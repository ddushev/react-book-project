import { createContext, useContext } from "react";

import { useEffect, useState } from "react";
import { dataFactory } from "../services/data";
import { useNavigate } from "react-router-dom";

const RoomContext = createContext();

export const RoomContextProvider = ({ children }) => {

    const [rooms, setRooms] = useState([]);
    const data = dataFactory(); 
    const navigate = useNavigate();
    useEffect(() => {
        data.getData()
            .then(data => setRooms(Object.values(data)));
    }, []);

    async function onAddSubmit(roomInfo) {
        const newRoom = await data.createRoom(roomInfo)
        setRooms(state => [...state, newRoom]);
        navigate('/available-rooms');
    }

    async function onEditSubmit(gameInfo, roomId) {
        try {
            const editedRoom = await data.editRoom(gameInfo, roomId);
            setRooms(state => state.map(room => room._id === roomId ? editedRoom : room));
            navigate(`/details/${roomId}`); //TBD
        } catch (error) {
            console.error(error.message);
        }
    }

    async function onDeleteClick(e, roomId) {
        e.preventDefault();
        await data.deleteRoom(roomId);
        setRooms(state => state.filter(room => room._id !== roomId));
        navigate('/catalog');
    }

    function getRoomFromState(roomId) {
        return rooms.find(game => game._id == roomId);
    }

    const context = {
        rooms,
        onAddSubmit,
        onEditSubmit,
        onDeleteClick,
        getRoomFromState
    }

    return (
        <>
            <RoomContext.Provider value={context}>
                {children}
            </RoomContext.Provider>
        </>
    );
}

export const UseGameContext = () => {
    return useContext(RoomContext);
}