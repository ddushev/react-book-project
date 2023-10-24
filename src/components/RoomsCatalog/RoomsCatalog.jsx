import { RoomsList } from "../Common/RoomsList/RoomsList";
import { Search } from "../Common/Search/Search";
import { RoomsHeader } from "./RoomsHeader/RoomsHeader";

export const RoomsCatalog = () => {
    return (
        <>
            <RoomsHeader />
            <Search />
            <RoomsList />
        </>
    );
}