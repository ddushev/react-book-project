import "./RoomDetails.css"
import { Link, useParams } from "react-router-dom";
import { Search } from "../Common/Search/Search";
import { RoomDetailsHeader } from "./RoomDetailsHeader.jsx/RoomDetailsHeader";
import { UseRoomContext } from "../../contexts/RoomContext";


export const RoomDetails = () => {
    const { roomId } = useParams();
    const { getRoomFromState } = UseRoomContext();
    const roomData = getRoomFromState(roomId);
    return (
        <>
            <RoomDetailsHeader />
            <Search />
            <div className="room-details wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src={roomData.imageUrl} alt="room image" />
                        <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                            ${roomData.price}/Night
                        </small>
                    </div>
                    <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">{roomData.name}</h5>
                            <div className="ps-2">
                                <small className="fa fa-star text-primary" />
                                <small className="fa fa-star text-primary" />
                                <small className="fa fa-star text-primary" />
                                <small className="fa fa-star text-primary" />
                                <small className="fa fa-star text-primary" />
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <small className="border-end me-3 pe-3">
                                <i className="fa fa-bed text-primary me-2" />{roomData.bed} Bed
                            </small>
                            <small className="border-end me-3 pe-3">
                                <i className="fa fa-bath text-primary me-2" />{roomData.bath} Bath
                            </small>
                            {
                                roomData.wifi == "Yes" &&
                                <small className="border-end me-3 pe-3">
                                    <i className="fa fa-wifi text-primary me-2" />
                                    Wifi
                                </small>
                            }

                            {
                                roomData.parking == "Yes" &&
                                <small className="border-end me-3 pe-3">
                                    <i className="fa fa-parking text-primary me-2" />
                                    Parking
                                </small>
                            }


                        </div>
                        <p className="text-body mb-3">
                            {roomData.description}
                        </p>
                        <div className="d-flex justify-content-between">
                            <Link className="btn btn-sm btn-primary rounded py-2 px-4" to={`/available-rooms/${roomData._id}/edit`}>
                                Edit Room
                            </Link>
                            <Link className="btn btn-sm btn-dark rounded py-2 px-4" to={`/available-rooms/${roomData._id}/delete`}>
                                Delete Room
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}