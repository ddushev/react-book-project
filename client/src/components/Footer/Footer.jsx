import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (<div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
    >
        <div className="container pb-5">
            <div className="row g-5">
                <div className="col-md-6 col-lg-4">
                    <div className="bg-primary rounded p-4">
                        <Link to="/">
                            <h1 className="text-white text-uppercase mb-3">ReactBook</h1>
                        </Link>
                        <p className="text-white mb-0">
                            Your opinnion is very important to us so please do not forget to share it with us and leave a like on our
                            <a
                                className="text-dark fw-medium"
                                href="#"
                            > social channels</a> !
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                        Contact
                    </h6>
                    <p className="mb-2">
                        <i className="fa fa-map-marker-alt me-3" />
                        123 Street, Sofia, Bulgaria
                    </p>
                    <p className="mb-2">
                        <i className="fa fa-phone-alt me-3" />
                        +359 896-859-188
                    </p>
                    <p className="mb-2">
                        <i className="fa fa-envelope me-3" />
                        danieldyshew@gmail.com
                    </p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href="https://twitter.com/danieldushev">
                            <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/daniel.dushew/">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-outline-light btn-social" href="https://www.youtube.com/@daniel.dushev">
                            <i className="fab fa-youtube" />
                        </a>
                        <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/ddushev/">
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="row gy-5 g-4">
                        <div className="col-md-6">
                            <h6 className="section-title text-start text-primary text-uppercase mb-4">
                                Company
                            </h6>
                            <Link className="btn btn-link" to="/about">
                                About Us
                            </Link>
                            <Link className="btn btn-link" to="/send-feedback">
                                Share Your Feedback
                            </Link>
                            <a className="btn btn-link" href="#">
                                Privacy Policy
                            </a>
                            <a className="btn btn-link" href="#">
                                Terms &amp; Condition
                            </a>
                            <a className="btn btn-link" href="#">
                                Support
                            </a>
                        </div>
                        <div className="col-md-6">
                            <h6 className="section-title text-start text-primary text-uppercase mb-4">
                                Services
                            </h6>
                            <Link className="btn btn-link" to="/available-rooms">
                                Book a Room
                            </Link>
                            <Link className="btn btn-link" to="/add-room">
                                Add Room
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        ©{" "}
                        <Link className="border-bottom" to="https://www.linkedin.com/in/ddushev/">
                            ReactBook by Daniel Dushev
                        </Link>
                        , All Right Reserved.
                        {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                        Designed By{" "}
                        <a className="border-bottom" href="https://htmlcodex.com">
                            HTML Codex
                        </a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <Link to="/">Home</Link>
                            <a href="#">Cookies</a>
                            <a href="#">Help</a>
                            <a href="#">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}