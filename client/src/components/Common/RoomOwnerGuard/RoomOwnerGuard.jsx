import { Outlet, useNavigate, useParams } from "react-router-dom";

import { useAuthContext } from "../../../contexts/AuthContext";
import { useRoomContext } from "../../../contexts/RoomContext";

export function RoomOwnerGuard() {
    const { roomId } = useParams();
    const { userId } = useAuthContext();
    const { getRoomFromState } = useRoomContext();
    const selectedRoom = getRoomFromState(roomId);
    const navigate = useNavigate();

    if (selectedRoom?._ownerId != userId) {
        return navigate(-1);
    }


    return <Outlet />
}