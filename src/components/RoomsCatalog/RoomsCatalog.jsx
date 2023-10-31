import { Link } from "react-router-dom";
import { useRoomContext } from "../../contexts/RoomContext";
import { CommonHeader } from "../Common/CommonHeader/CommonHeader";
import { RoomCard } from "../Common/RoomCard/RoomCard";
import { Search } from "../Common/Search/Search";

export const RoomsCatalog = () => {
    const { rooms } = useRoomContext();
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
                                {rooms.map(room => <RoomCard key={room._id} {...room} />)}
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