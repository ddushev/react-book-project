import { Link } from "react-router-dom";
import { UseRoomContext } from "../../contexts/RoomContext";
import { CommonHeader } from "../Common/CommonHeader/CommonHeader";
import { RoomsList } from "../Common/RoomsList/RoomsList";
import { Search } from "../Common/Search/Search";

export const RoomsCatalog = () => {
    const { rooms } = UseRoomContext();
    console.log(rooms);
    return (
        <>
            <CommonHeader />
            <Search />
            <div className="container-xxl py-5">
                <div className="container">
                    {rooms.length > 0 ?
                        <>
                            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                                <h6 className="section-title text-center text-primary text-uppercase">
                                    Our Rooms
                                </h6>
                                <h1 className="mb-5">
                                    Explore Our <span className="text-primary text-uppercase">Rooms</span>
                                </h1>
                            </div>
                            <div className="row g-4">
                                {rooms.map(room => <RoomsList key={room._id} {...room} />)}
                            </div>
                        </> :
                        <>
                            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                                <h6 className="section-title text-center text-primary text-uppercase">
                                    No Available Rooms
                                </h6>
                                <h1 className="mb-5">
                                    Be our first 
                                    <Link to="/add-room">
                                        <span className="text-primary text-uppercase"> Host</span>
                                    </Link>
                                </h1>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}