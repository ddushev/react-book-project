import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import { useRoomContext } from "../../../contexts/RoomContext";

export function RoomBookedOrConfirmedGuard() {
    const { roomId } = useParams();
    const { getRoomFromState } = useRoomContext();
    const selectedRoom = getRoomFromState(roomId);
    const navigate = useNavigate();


    useEffect(() => {
        if (selectedRoom?.bookedBy || selectedRoom?.confirmed) {
            return navigate(-1);
        }
    }, [selectedRoom]);


    return <Outlet />
}