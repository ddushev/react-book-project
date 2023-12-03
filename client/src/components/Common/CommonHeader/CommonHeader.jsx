import "./CommonHeader.css";

import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import PATH from "../../../utils/paths";

export const CommonHeader = () => {
    const locationPathname = useLocation().pathname;
    const locationSearch = useLocation().search;
    const [currentPageInfo, setCurrentPageInfo] = useState({
        heading: '',
        page: ''
    });

    //configure dynamic URLs
    const { roomId } = useParams();
    const editUrl = `/available-rooms/${roomId}/edit`;
    const detailsUrl = `/available-rooms/${roomId}/details`;
    const bookingConfirmationUrl = `/booking-confirmation/${roomId}`;
    const pendingConfirmationUrl = `/pending-confirmation/${roomId}`;
    const reservationConfirmedUrl = `/reservation-confirmed/${roomId}`;

    useEffect(() => {
        if (!!locationSearch) {
            setCurrentPageInfo({
                heading: 'Find Room',
                page: 'Searching for a room'
            })
        } else {
            setCurrentPageInfo(pageInfo.current[locationPathname]);
        }
    }, [locationPathname, locationSearch]);

    const pageInfo = useRef({
        [PATH.ABOUT]: {
            heading: 'About',
            page: 'About us'

        },
        "/available-rooms": {
            heading: 'Available Rooms',
            page: 'Published by others'
        },
        "/add-room": {
            heading: 'Add Room',
            page: 'Host a room'
        },
        "/testimonials": {
            heading: 'Testimonials',
            page: 'Customer feedback'
        },
        "/my-published-rooms": {
            heading: 'Published Rooms',
            page: 'Published by you'
        },
        "/my-bookings": {
            heading: 'Booked Rooms',
            page: 'Booked by you'
        },
        "/my-hosted-rooms": {
            heading: 'Hosted Rooms',
            page: 'Hosted by you'
        },
        [editUrl]: {
            heading: 'Edit Room',
            page: 'Update details'
        },
        [detailsUrl]: {
            heading: 'Room Details',
            page: 'Info'
        },
        [bookingConfirmationUrl]: {
            heading: 'Booking Confirmation',
            page: 'Confirmation details'
        },
        [pendingConfirmationUrl]: {
            heading: 'Confirmation Pending',
            page: 'Pending confirmation page'
        },
        [reservationConfirmedUrl]: {
            heading: 'Reseravtion Confirmed',
            page: 'Room confirmed'
        }
    });
    return (
        <div
            className="container-fluid page-header mb-5 p-0"
            style={{ backgroundImage: "url(/img/carousel-1.jpg)" }}
        >
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">
                        {currentPageInfo.heading}
                    </h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item">
                                <Link to={PATH.HOME}>Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/available-rooms">All Rooms</Link>
                            </li>
                            <li
                                className="breadcrumb-item text-white active"
                                aria-current="page"
                            >
                                {currentPageInfo.page}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
}