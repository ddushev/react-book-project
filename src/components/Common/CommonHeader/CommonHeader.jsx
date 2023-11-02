import "./CommonHeader.css";

import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

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

    useEffect(() => {
        if (!!locationSearch) {
            setCurrentPageInfo({
                heading: 'Find Room',
                page: 'Searching For A Room'
            })
        } else {
            setCurrentPageInfo(pageInfo.current[locationPathname]);
        }
    }, [locationPathname]);

    const pageInfo = useRef({
        "/about": {
            heading: 'About',
            page: 'About Us'

        },
        "/available-rooms": {
            heading: 'Available Rooms',
            page: 'Published by others'
        },
        "/add-room": {
            heading: 'Add Room',
            page: 'Host a Room'
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
            heading: 'Booking Confirmed',
            page: 'Confirmation page'
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
                                <Link to="/">Home</Link>
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