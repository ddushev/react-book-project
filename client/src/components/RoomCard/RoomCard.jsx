import "./RoomCard.css"

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useRoomContext } from "../../contexts/RoomContext";

export const RoomCard = ({
    roomData
}) => {
    const { onBookRoomClick } = useRoomContext();
    const locationPathname = useLocation().pathname;
    const [currentPageInfo, setCurrentPageInfo] = useState({
        colorTypeClass: '',
        statusText: '',
        linksContainerClass: '',
        firstLink: '',
        secondLink: '',
        secondLinkCallback: '',
        secondLinkTo: ''

    });

    useEffect(() => {
        if (roomData?.confirmed) {
            setCurrentPageInfo({
                colorTypeClass: 'primary',
                statusText: 'Confirmed',
                linksContainerClass: 'd-flex justify-content-between',
                firstLink: 'View details',
                secondLink: 'Send message'
            });
        } else if (!roomData?.confirmed && roomData?.bookedBy) {
            setCurrentPageInfo({
                colorTypeClass: 'dark',
                statusText: 'Pending',
                linksContainerClass: 'd-flex justify-content-between',
                firstLink: locationPathname == '/my-published-rooms' ? 'Confirm booking' : 'View details',
                secondLink: locationPathname == '/my-published-rooms' ? 'Decline booking' : 'Cancel booking',
                secondLinkCallback: locationPathname == '/my-published-rooms' ? () => console.log('Decline booking') : onBookRoomClick,
                secondLinkTo: locationPathname == '/my-published-rooms' ? '/placeholder' : '/available-rooms'
            })
        } else if (!roomData?.confirmed && !roomData?.bookedBy) {
            setCurrentPageInfo({
                colorTypeClass: 'secondary',
                statusText: 'Not Booked',
                linksContainerClass: 'button-center',
                firstLink: 'View details',
                secondLink: ''
            });
        }
    }, [roomData?.bookedBy, roomData?.confirmed]);

    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${Math.random()}s`}>
            <div className="shadow rounded overflow-hidden">
                {
                    locationPathname == '/my-bookings' || locationPathname == '/my-published-rooms' ?
                        <>
                            <div className="position-relative">
                                <img className="img-fluid" src={roomData?.imageUrl} alt="room image" />
                                <small className={`position-absolute start-0 top-100 translate-middle-y bg-${currentPageInfo?.colorTypeClass} text-white rounded py-1 px-3 ms-4`}>
                                    ${roomData?.price}/Night
                                </small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">{roomData?.name}</h5>
                                    <div className="ps-2">
                                        <small className={`fa fa-star text-${currentPageInfo?.colorTypeClass}`} />
                                        <small className={`fa fa-star text-${currentPageInfo?.colorTypeClass}`} />
                                        <small className={`fa fa-star text-${currentPageInfo?.colorTypeClass}`} />
                                        <small className={`fa fa-star text-${currentPageInfo?.colorTypeClass}`} />
                                        <small className={`fa fa-star text-${currentPageInfo?.colorTypeClass}`} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0"><i className={`fas fa-info-circle text-${currentPageInfo?.colorTypeClass} me-2`} />{currentPageInfo?.statusText}</h5>
                                    <h5 className="mb-0"><i className={`fas fa-map-marker-alt text-${currentPageInfo?.colorTypeClass} me-2`} />{roomData?.location}</h5>
                                </div>
                                <p className="text-body mb-3">
                                    {roomData?.description}
                                </p>
                                <div className={currentPageInfo?.linksContainerClass}>
                                    <Link className={`btn btn-sm btn-${currentPageInfo?.colorTypeClass} rounded py-2 px-4`} to={`/available-rooms/${roomData?._id}/details`}>
                                        {currentPageInfo?.firstLink}
                                    </Link>
                                    {currentPageInfo?.secondLink &&
                                        <Link onClick={() => currentPageInfo?.secondLinkCallback({ ...roomData, bookedBy: '' }, roomData?._id, currentPageInfo?.secondLinkTo)} className={`btn btn-sm btn-${currentPageInfo?.colorTypeClass} rounded py-2 px-4`} to="#">
                                            {currentPageInfo?.secondLink}
                                        </Link>
                                    }
                                </div>


                                {/* {!roomData?.confirmed &&
                                    <div className="d-flex justify-content-between">
                                        <Link className="btn btn-sm btn-dark rounded py-2 px-4" to={`/available-rooms/${roomData?._id}/details`}>
                                            View Details
                                        </Link>
                                        <a onClick={() => console.log("Booking cancelled")} className="btn btn-sm btn-dark rounded py-2 px-4" href="#">
                                            Cancel booking
                                        </a>
                                    </div>
                                } */}
                            </div>
                        </>
                        :
                        <>
                            <div className="shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src={roomData?.imageUrl} alt="room image" />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                                        ${roomData?.price}/Night
                                    </small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">{roomData?.name}</h5>
                                        <h5 className="mb-0"><i className="fas fa-map-marker-alt text-primary me-2" />{roomData?.location}</h5>
                                    </div>
                                    <p className="text-body mb-3">
                                        {roomData?.description}
                                    </p>
                                    <div className="button-center">
                                        <Link className="btn btn-sm btn-primary rounded py-2 px-4" to={`/available-rooms/${roomData?._id}/details`}>
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}