import { CommonHeader } from "../Common/CommonHeader/CommonHeader";
import { RoomsList } from "../Common/RoomsList/RoomsList";
import { Search } from "../Common/Search/Search";

export const RoomsCatalog = () => {
    return (
        <>
            <CommonHeader />
            <Search />
            <RoomsList />
        </>
    );
}