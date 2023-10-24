import { Search } from "../Common/Search/Search";
import { AboutHeader } from "./AboutHeader/AboutHeader";
import { AboutMain } from "./AboutMain/AboutMain";

export const About = () => {
    return (
        <>
            <AboutHeader />
            <Search />
            <AboutMain />
        </>
    );
}