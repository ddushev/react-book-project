import { Navigate, Outlet, useParams } from "react-router-dom";

import { useAuthContext } from "../../../contexts/AuthContext";
import { useRoomContext } from "../../../contexts/RoomContext";

export function RoomOwnerGuard() {
    const { roomId } = useParams();
    const { userId } = useAuthContext();
    const { getRoomFromState } = useRoomContext();
    const selectedRoom = getRoomFromState(roomId);
    if (selectedRoom?._ownerId != userId) {
        return <Navigate to={`/available-rooms/${roomId}/details`} />
    }

    return <Outlet />
}