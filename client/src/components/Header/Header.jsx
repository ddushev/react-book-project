import { useAuthContext } from "../../contexts/AuthContext";
import "./Header.css";

import { Link } from "react-router-dom";

export const Header = () => {
    const { isAuthenticated, userImg } = useAuthContext();
    return (
        <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-3 bg-dark d-none d-lg-block">
                    <Link
                        to="/"
                        className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
                    >
                        <h1 className="m-0 text-primary text-uppercase">ReactBook</h1>
                    </Link>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-0 bg-white d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="fa fa-envelope text-primary me-2" />
                                <p className="mb-0">danieldyshew@gmail.com</p>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2">
                                <i className="fa fa-phone-alt text-primary me-2" />
                                <p className="mb-0">+359 896-859-188</p>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="d-inline-flex align-items-center py-2">
                                <a className="me-3" target="_blank" href="https://www.facebook.com/daniel.dushew/">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="me-3" target="_blank" href="https://twitter.com/danieldushev">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="me-3" target="_blank" href="https://www.linkedin.com/in/ddushev/">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                <a className="me-3" target="_blank" href="https://www.instagram.com/daniel.dushev/">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a className="me-3" target="_blank" href="https://www.youtube.com/@daniel.dushev">
                                    <i className="fab fa-youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <Link to="/" className="navbar-brand d-block d-lg-none">
                            <h1 className="m-0 text-primary text-uppercase">ReactBook</h1>
                        </Link>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">
                                    Home
                                </Link>
                                <Link to="/about" className="nav-item nav-link">
                                    About
                                </Link>
                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Rooms
                                    </a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <Link to="available-rooms" className="dropdown-item">
                                            Catalog
                                        </Link>
                                        {isAuthenticated &&
                                            <Link to="add-room" className="dropdown-item">
                                                Add
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Feedback
                                    </a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <Link to="/testimonials" className="dropdown-item">
                                            Testimonials
                                        </Link>
                                        {isAuthenticated &&
                                            <Link to="/send-feedback" className="dropdown-item">
                                                Share your feedback
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                isAuthenticated ?
                                    <div className="nav-item dropdown">
                                        <a
                                            href="#"
                                            className="nav-link dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                        >
                                            <img
                                                className="img-fluid flex-shrink-0 rounded"
                                                src={userImg}
                                                style={{ width: 60, height: 60 }}
                                            />
                                        </a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <Link to="/my-published-rooms" className="dropdown-item">
                                                Published
                                            </Link>
                                            <Link to="/my-bookings" className="dropdown-item">
                                                Bookings
                                            </Link>
                                            <Link to="/my-hosted-rooms" className="dropdown-item">
                                                Hosted
                                            </Link>
                                            <Link to="/logout" className="dropdown-item">
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                    :
                                    <Link
                                        to="/sign-in"
                                        className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block"
                                    >
                                        Sign
                                    </Link>
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}