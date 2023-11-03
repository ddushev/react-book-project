import "./RoomDetails.css"

import { Link, useLocation, useParams } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useRoomContext } from "../../contexts/RoomContext";

import { Search } from "../Common/Search/Search";
import { CommonHeader } from "../Common/CommonHeader/CommonHeader";


export const RoomDetails = () => {
    const locationPathname = useLocation().pathname;
    const { roomId } = useParams();
    const { userId, username } = useAuthContext();
    const { getRoomFromState, onDeleteRoomClick, onBookRoomClick } = useRoomContext();
    const roomData = getRoomFromState(roomId);

    return (
        <>
            <CommonHeader />
            <Search />
            <div className="room-details wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src={roomData?.imageUrl} alt="room image" />
                        <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                            ${roomData?.price}/Night
                        </small>
                    </div>
                    <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">{roomData?.name}</h5>
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
                                <i className="fa fa-bed text-primary me-2" />{roomData?.bed} 
                            </small>
                            <small className="border-end me-3 pe-3">
                                <i className="fa fa-bath text-primary me-2" />{roomData?.bath} 
                            </small>
                            <small className="border-end me-3 pe-3">
                                <i className="fa fa-male text-primary me-2" />{roomData?.adult} 
                            </small>
                            <small className="border-end me-3 pe-3">
                                <i className="fa fa-baby text-primary me-2" />{roomData?.child}
                            </small>
                            {
                                roomData?.wifi == "Yes" &&
                                <small className="border-end me-3 pe-3">
                                    <i className="fa fa-wifi text-primary me-2" />
                                    Yes
                                </small>
                            }

                            {
                                roomData?.parking == "Yes" &&
                                <small className="border-end me-3 pe-3">
                                    <i className="fa fa-parking text-primary me-2" />
                                    Yes
                                </small>
                            }


                        </div>
                        <div className="text-body mb-3">
                            {locationPathname == `/available-rooms/${roomId}/details` &&
                                roomData?.description
                            }

                            {locationPathname == `/booking-confirmation/${roomId}` &&
                                <>
                                    <p>Dear {username},</p>
                                    <p>We are delighted to confirm your booking. We look forward to welcoming you and ensuring your stay is a memorable one. If you have any special requests or need further assistance, please feel free to reach out to your host {roomData?.ownerName} @ {roomData?.ownerEmail}.</p>
                                    <p>Warm regards,</p>
                                    <p>ReactBook's team</p>
                                </>
                            }
                        </div>
                        {/* Owner buttons */}
                        {
                            userId == roomData?._ownerId &&

                            <div className="d-flex justify-content-between">
                                <Link className="btn btn-sm btn-primary rounded py-2 px-4" to={`/available-rooms/${roomData?._id}/edit`}>
                                    Edit Room
                                </Link>
                                <a onClick={(e) => onDeleteRoomClick(e, roomId)} className="btn btn-sm btn-dark rounded py-2 px-4" href="#">
                                    Delete Room
                                </a>
                            </div>
                        }
                        {/* Not owner user buttons before booking */}
                        {
                            userId && userId != roomData?._ownerId && !roomData?.booked &&

                            <div className="d-flex justify-content-between">
                                <Link onClick={() => onBookRoomClick({ ...roomData, booked: true }, roomId)} className="btn btn-sm btn-primary rounded py-2 px-4" to="#">
                                    Book Room
                                </Link>
                                <Link className="btn btn-sm btn-dark rounded py-2 px-4" to="/available-rooms">
                                    Back to Catalog
                                </Link>
                            </div>
                        }

                        {/* Not owner user buttons after booking */}
                        {
                            userId && userId != roomData?._ownerId && roomData?.booked &&

                            <div className="d-flex justify-content-between">
                                <Link className="btn btn-sm btn-primary rounded py-2 px-4" to="/my-bookings">
                                    Check your bookings
                                </Link>
                                <Link className="btn btn-sm btn-dark rounded py-2 px-4" to="/available-rooms">
                                    Back to Catalog
                                </Link>
                            </div>
                        }
                        {/* Guest */}
                        {
                            !userId &&

                            <div className="d-flex justify-content-between">
                                <Link className="btn btn-sm btn-primary rounded py-2 px-4" to="/sign-in">
                                    Sign In to Book
                                </Link>
                                <Link className="btn btn-sm btn-dark rounded py-2 px-4" to="/available-rooms">
                                    Back to Catalog
                                </Link>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </>
    );
}