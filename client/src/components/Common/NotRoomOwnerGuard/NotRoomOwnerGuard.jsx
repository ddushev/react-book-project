import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import { useAuthContext } from "../../../contexts/AuthContext";
import { useRoomContext } from "../../../contexts/RoomContext";

export function NotRoomOwnerGuard() {
    const { roomId } = useParams();
    const { userId } = useAuthContext();
    const { getRoomFromState } = useRoomContext();
    const selectedRoom = getRoomFromState(roomId);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (selectedRoom?._ownerId == userId) {
            return navigate(-1);
        }
    }, [selectedRoom, userId]);


    return <Outlet />
}