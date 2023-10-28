import { RoomsList } from "../Common/RoomsList/RoomsList";
import { Search } from "../Common/Search/Search";
import { Carousel } from "./Carousel/Carousel";

export const Home = () => {
    return (
        <>
            <Carousel />
            <Search />
        </>
    );
}