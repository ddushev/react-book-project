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
    const { getRoomFromState, onDeleteRoomClick, onBookRoomInteract } = useRoomContext();
    const roomData = getRoomFromState(roomId);

    return (
        <>
            <CommonHeader />
            <Search />
            <div className="room-details wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative room-img" >
                        <img className="img-fluid" src={roomData?.imageUrl} alt="room image" />
                    </div>
                    <div className="p-4 mt-2 room-details">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">{roomData?.name}</h5>
                            <h5 className="mb-0"><i className="fas fa-map-marker-alt text-primary me-2" />{roomData?.location}</h5>
                        </div>
                        <div className="d-flex mb-3">
                            <small className="border-end me-3 pe-3">
                                <i className="fas fa-dollar-sign text-primary me-2" />{roomData?.price}
                            </small>
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
                        <div className="text-body mb-3 details-description">
                            {locationPathname == `/available-rooms/${roomId}/details` &&
                                roomData?.description
                            }

                            {locationPathname == `/booking-confirmation/${roomId}` &&
                                <>
                                    <p>Dear {username},</p>
                                    <p>We are delighted to confirm your booking. We look forward to welcoming you and ensuring your stay is a memorable one. If you have any special requests or need further assistance, please feel free to reach out to your host <span className="contact-person">{roomData?.ownerName} @ {roomData?.ownerEmail} </span>.</p>
                                    <p>Warm regards,</p>
                                    <p>ReactBook's team</p>
                                </>
                            }
                            {locationPathname == `/pending-confirmation/${roomId}` &&
                                <>
                                    <p>Dear {username},</p>
                                    <p>Thank you for your booking! Your request has been received, and we are currently liaising with the host <span className="contact-person">{roomData?.ownerName} @ {roomData?.ownerEmail} </span> to confirm your reservation. Please allow us a short period for confirmation, and we'll promptly update you once everything is finalized. Your patience is greatly appreciated.</p>
                                    <p>Best regards,</p>
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
                            userId && userId != roomData?._ownerId && !roomData?.bookedBy &&

                            <div className="d-flex justify-content-between">
                                <Link onClick={() => onBookRoomInteract({ ...roomData, bookedBy: userId }, roomId, `/pending-confirmation/${roomId}`)} className="btn btn-sm btn-primary rounded py-2 px-4" to="#">
                                    Book Room
                                </Link>
                                <Link className="btn btn-sm btn-dark rounded py-2 px-4" to="/available-rooms">
                                    Available Rooms
                                </Link>
                            </div>
                        }

                        {/* Not owner user buttons after booking */}
                        {
                            userId && userId != roomData?._ownerId && roomData?.bookedBy &&

                            <div className="d-flex justify-content-between">
                                <Link className="btn btn-sm btn-primary rounded py-2 px-4" to="/my-bookings">
                                    Check your bookings
                                </Link>
                                <Link className="btn btn-sm btn-dark rounded py-2 px-4" to="/available-rooms">
                                    Available Rooms
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