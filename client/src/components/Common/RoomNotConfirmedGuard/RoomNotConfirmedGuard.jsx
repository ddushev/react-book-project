import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import { useRoomContext } from "../../../contexts/RoomContext";
import { useAuthContext } from "../../../contexts/AuthContext";

export function RoomNotConfirmedGuard() {
    const { roomId } = useParams();
    const { userId } = useAuthContext();
    const { getRoomFromState } = useRoomContext();
    const selectedRoom = getRoomFromState(roomId);
    const navigate = useNavigate();


    useEffect(() => {
        if (!selectedRoom?.confirmed) {
            return navigate(-1);
        }
    }, [selectedRoom]);


    return <Outlet />
}