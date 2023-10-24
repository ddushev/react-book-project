import { RoomsList } from "../Common/RoomsList/RoomsList";
import { Search } from "../Common/Search/Search";
import { RoomHeader } from "./RoomHeader/RoomHeader";

export const Room = () => {
    return (
        <>
            <RoomHeader />
            <Search />
            <RoomsList />
        </>
    );
}