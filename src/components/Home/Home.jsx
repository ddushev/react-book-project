import { Rooms } from "../Common/Rooms/Rooms";
import { Search } from "../Common/Search/Search";
import { Carousel } from "./Carousel/Carousel";

export const Home = () => {
    return (
        <>
            <Carousel />
            <Search />
            <Rooms />
        </>
    );
}