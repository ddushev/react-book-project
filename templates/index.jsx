
 <div className="container-xxl bg-white p-0">

        {/* About Start */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">
                            About Us
                        </h6>
                        <h1 className="mb-4">
                            Welcome to{" "}
                            <span className="text-primary text-uppercase">Hotelier</span>
                        </h1>
                        <p className="mb-4">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                            lorem sit clita duo justo magna dolore erat amet
                        </p>
                        <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-hotel fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            1234
                                        </h2>
                                        <p className="mb-0">Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users-cog fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            1234
                                        </h2>
                                        <p className="mb-0">Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            1234
                                        </h2>
                                        <p className="mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">
                            Explore More
                        </a>
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
        {/* About End */}
        
        {/* Video Start */}
        <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
            <div className="row g-0">
                <div className="col-md-6 bg-dark d-flex align-items-center">
                    <div className="p-5">
                        <h6 className="section-title text-start text-white text-uppercase mb-3">
                            Luxury Living
                        </h6>
                        <h1 className="text-white mb-4">Discover A Brand Luxurious Hotel</h1>
                        <p className="text-white mb-4">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                            lorem sit clita duo justo magna dolore erat amet
                        </p>
                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">
                            Our Rooms
                        </a>
                        <a href="" className="btn btn-light py-md-3 px-md-5">
                            Book A Room
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="video">
                        <button
                            type="button"
                            className="btn-play"
                            data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                            data-bs-target="#videoModal"
                        >
                            <span />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="modal fade"
            id="videoModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Youtube Video
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        {/* 16:9 aspect ratio */}
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="embed-responsive-item"
                                src=""
                                id="video"
                                allowFullScreen=""
                                allowscriptaccess="always"
                                allow="autoplay"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Video Start */}
        {/* Service Start */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">
                        Our Services
                    </h6>
                    <h1 className="mb-5">
                        Explore Our{" "}
                        <span className="text-primary text-uppercase">Services</span>
                    </h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-hotel fa-2x text-primary" />
                                </div>
                            </div>
                            <h5 className="mb-3">Rooms &amp; Appartment</h5>
                            <p className="text-body mb-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet lorem.
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-utensils fa-2x text-primary" />
                                </div>
                            </div>
                            <h5 className="mb-3">Food &amp; Restaurant</h5>
                            <p className="text-body mb-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet lorem.
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-spa fa-2x text-primary" />
                                </div>
                            </div>
                            <h5 className="mb-3">Spa &amp; Fitness</h5>
                            <p className="text-body mb-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet lorem.
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-swimmer fa-2x text-primary" />
                                </div>
                            </div>
                            <h5 className="mb-3">Sports &amp; Gaming</h5>
                            <p className="text-body mb-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet lorem.
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-glass-cheers fa-2x text-primary" />
                                </div>
                            </div>
                            <h5 className="mb-3">Event &amp; Party</h5>
                            <p className="text-body mb-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet lorem.
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-dumbbell fa-2x text-primary" />
                                </div>
                            </div>
                            <h5 className="mb-3">GYM &amp; Yoga</h5>
                            <p className="text-body mb-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet lorem.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Service End */}
        {/* Testimonial Start */}
        <div
            className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
            data-wow-delay="0.1s"
        >
            <div className="container">
                <div className="owl-carousel testimonial-carousel py-5">
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                        <p>
                            Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                            rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd
                            kasd et erat magna eos
                        </p>
                        <div className="d-flex align-items-center">
                            <img
                                className="img-fluid flex-shrink-0 rounded"
                                src="img/testimonial-1.jpg"
                                style={{ width: 45, height: 45 }}
                            />
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
                    </div>
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                        <p>
                            Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                            rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd
                            kasd et erat magna eos
                        </p>
                        <div className="d-flex align-items-center">
                            <img
                                className="img-fluid flex-shrink-0 rounded"
                                src="img/testimonial-2.jpg"
                                style={{ width: 45, height: 45 }}
                            />
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
                    </div>
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                        <p>
                            Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                            rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd
                            kasd et erat magna eos
                        </p>
                        <div className="d-flex align-items-center">
                            <img
                                className="img-fluid flex-shrink-0 rounded"
                                src="img/testimonial-3.jpg"
                                style={{ width: 45, height: 45 }}
                            />
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
                    </div>
                </div>
            </div>
        </div>
        {/* Testimonial End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">
                        Our Team
                    </h6>
                    <h1 className="mb-5">
                        Explore Our{" "}
                        <span className="text-primary text-uppercase">Staffs</span>
                    </h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-4.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Team End */}


    </div>