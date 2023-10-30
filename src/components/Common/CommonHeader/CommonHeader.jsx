import { useEffect, useRef, useState } from "react";
import "./CommonHeader.css";

import { Link, useLocation, useParams } from "react-router-dom";

export const CommonHeader = () => {
    const locationPathname = useLocation().pathname;
    const [currentPageInfo, setPageInfo] = useState({
        heading: '',
    });

    const { roomId } = useParams();
    const editUrl = `/available-rooms/${roomId}/edit`

    useEffect(() => {
        setPageInfo(pageInfo.current[locationPathname]);
    }, [locationPathname]);

    const pageInfo = useRef({
        "/about": {
            heading: 'About Us',
            page: 'About'

        },
        "/available-rooms": {
            heading: 'Rooms Catalog',
            page: 'Available Rooms'
        },
        "/add-room": {
            heading: 'Add Room',
            page: 'Host a Room'
        },
        "/testimonials": {
            heading: 'Testimonials',
            page: 'Customer feedback'
        },
        [editUrl]: {
            heading: 'Edit Room',
            page: 'Update details'
        },
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
                                <Link to="/send-feedback">Feedback</Link>
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