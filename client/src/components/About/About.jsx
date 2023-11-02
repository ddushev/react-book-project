import { Search } from "../Common/Search/Search";
import { CommonHeader } from "../Common/CommonHeader/CommonHeader";
import { AboutMain } from "./AboutMain/AboutMain";

export const About = () => {
    return (
        <>
            <CommonHeader />
            <Search />
            <AboutMain />
        </>
    );
}