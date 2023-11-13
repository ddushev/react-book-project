import './Testimonials.css'
import { CommonHeader } from "../Common/CommonHeader/CommonHeader";

export const Testimonials = function () {
    return (
        <>
            <div
                className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
                data-wow-delay="0.1s"
            >
                <div className="container">
                    <div className="owl-carousel testimonial-carousel py-5 owl-loaded owl-drag">
                        <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                            <p>
                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd
                                kasd et erat magna eos
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    className="img-fluid flex-shrink-0 rounded"
                                    src="/img/testimonial-1.jpg"
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
                                    src="/img/testimonial-2.jpg"
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
                                    src="/img/testimonial-3.jpg"
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
        </>
    );
}