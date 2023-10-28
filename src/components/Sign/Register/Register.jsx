import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-5">
                        <span className="text-primary text-uppercase">Sign up</span>
                    </h1>
                    <h6 className="section-title text-center text-uppercase">
                        If already a member just <Link to="/sign-in">Sign in</Link>
                    </h6>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder="First Name"
                                                name="firstName"
                                            />
                                            <label htmlFor="firstName   ">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="lastName"
                                                placeholder="Last Name"
                                                name="lastName"
                                            />
                                            <label htmlFor="lastName">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"
                                                name="email"
                                            />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="password"
                                                placeholder="Password"
                                                name="password"
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="repeatPassword"
                                                placeholder="Repeat password"
                                                name="repeatPassword"
                                            />
                                            <label htmlFor="repeatPassword">Repeat password</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="imageUrl"
                                                placeholder="Image URL"
                                                name="imageUrl"
                                            />
                                            <label htmlFor="imageUrl">Image URL</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInDown" data-wow-delay="0.1s">
                        <img
                            className="position-relative rounded w-100 h-100"
                            src="/img/about-3.jpg"
                            frameBorder={0}
                            style={{ minHeight: 350, border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}