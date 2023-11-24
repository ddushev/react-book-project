import {  Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import { useRoomContext } from "../../../contexts/RoomContext";
import { useEffect } from "react";

export function ReservationConfirmedGuard() {
    const { roomId } = useParams();
    const { getRoomFromState } = useRoomContext();
    const location = useLocation();
    const selectedRoom = getRoomFromState(roomId);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedRoom?.bookedBy) {
            return navigate(-2);
        }
    }, [location.pathname, selectedRoom]);


    return <Outlet />
}