export const RoomsList = ({
    imageUrl,
    price,
    name,
    bed,
    bath,
    wifi,
    description

}) => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
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
                        <div className="ps-2">
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3">
                            <i className="fa fa-bed text-primary me-2" />{bed} Bed
                        </small>
                        <small className="border-end me-3 pe-3">
                            <i className="fa fa-bath text-primary me-2" />{bath} Bath
                        </small>
                        <small>
                            <i className="fa fa-wifi text-primary me-2" />
                            Wifi
                        </small>
                    </div>
                    <p className="text-body mb-3">
                        {description}
                    </p>
                    <div className="d-flex justify-content-between">
                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">
                            View Detail
                        </a>
                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}