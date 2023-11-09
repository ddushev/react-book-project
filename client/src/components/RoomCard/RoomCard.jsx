import "./RoomCard.css"
import { Link, useLocation } from "react-router-dom";

export const RoomCard = ({
    _id,
    imageUrl,
    location,
    price,
    name,
    description
}) => {
    const locationPathname = useLocation().pathname;
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${Math.random()}s`}>
            <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                    <img className="img-fluid" src={imageUrl} alt="room image" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                        ${price}/Night
                    </small>
                </div>
                <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{name}</h5>
                        {/* <div className="ps-2">
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                        </div> */}
                        <h5 className="mb-0"><i className="fas fa-map-marker-alt text-primary me-2" />{location}</h5>
                    </div>
                    <p className="text-body mb-3">
                        {description}
                    </p>
                    { (locationPathname == '/my-published-rooms' || locationPathname == '/available-rooms') &&
                        <div className="button-center">
                            <Link className="btn btn-sm btn-primary rounded py-2 px-4" to={`/available-rooms/${_id}/details`}>
                                View Details
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}