import "./AboutMain.css";

import { Link } from "react-router-dom";

import { useRoomContext } from "../../../contexts/RoomContext";

export const AboutMain = () => {
    const { rooms } = useRoomContext();
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">
                            About Us
                        </h6>
                        <h1 className="mb-4">
                            Welcome to{" "}
                            <span className="text-primary text-uppercase">ReactBook</span>
                        </h1>
                        <p className="mb-4">
                            We revolutionize the travel industry. Our services connects travelers with a myriad of accommodations offered by hosts and property owners worldwide. Whether you're looking for a chic urban apartment, a cozy countryside cottage, or an exotic villa, ReacBook's diverse listings cater to various tastes and budgets. Users can easily navigate through these options, read reviews from previous guests, and book their desired accommodations directly through the website, providing a seamless and personalized travel experience.
                        </p>
                        <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-hotel fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            {rooms.filter(room => !room.confirmed && !room.bookedBy).length}
                                        </h2>
                                        <p className="mb-0">Available Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-bed fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            {rooms.filter(room => room.bookedBy && !room.confirmed).length}
                                        </h2>
                                        <p className="mb-0">Booked Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fas fa-calendar-check fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            {rooms.filter(room => room.confirmed).length}
                                        </h2>
                                        <p className="mb-0">Confirmed Reservations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className="btn btn-primary py-3 px-5 mt-2" to="/available-rooms">
                            Explore More
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img
                                    className="img-fluid rounded w-75 wow zoomIn"
                                    data-wow-delay="0.1s"
                                    src="img/about-1.jpg"
                                    style={{ marginTop: "25%" }}
                                />
                            </div>
                            <div className="col-6 text-start">
                                <img
                                    className="img-fluid rounded w-100 wow zoomIn"
                                    data-wow-delay="0.3s"
                                    src="img/about-2.jpg"
                                />
                            </div>
                            <div className="col-6 text-end">
                                <img
                                    className="img-fluid rounded w-50 wow zoomIn"
                                    data-wow-delay="0.5s"
                                    src="img/about-3.jpg"
                                />
                            </div>
                            <div className="col-6 text-start">
                                <img
                                    className="img-fluid rounded w-75 wow zoomIn"
                                    data-wow-delay="0.7s"
                                    src="img/about-4.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}