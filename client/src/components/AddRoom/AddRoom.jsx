import { useEffect } from "react";

import { useRoomContext } from "../../contexts/RoomContext";
import { useAuthContext } from "../../contexts/AuthContext";

import { ROOM_FORM_FIELDS } from "../../utils/constants";
import useForm from "../../hooks/useForm";

import { CommonHeader } from "../Common/CommonHeader/CommonHeader";

export const AddRoom = () => {
    const { onAddRoomSubmit, roomErrors, setRoomErrors } = useRoomContext();

    useEffect(() => {
        return () => {
            setRoomErrors([]);
        }
    }, []);
    const { userEmail, username } = useAuthContext();
    const { values, onSubmit, onChangeHandler } = useForm({
        [ROOM_FORM_FIELDS.NAME]: '',
        [ROOM_FORM_FIELDS.PRICE]: '',
        [ROOM_FORM_FIELDS.IMAGE_URL]: '',
        [ROOM_FORM_FIELDS.LOCATION]: '',
        [ROOM_FORM_FIELDS.ADULT]: '1',
        [ROOM_FORM_FIELDS.CHILD]: '0',
        [ROOM_FORM_FIELDS.BED]: '1',
        [ROOM_FORM_FIELDS.BATH]: '1',
        [ROOM_FORM_FIELDS.WIFI]: 'Yes',
        [ROOM_FORM_FIELDS.PARKING]: 'Yes',
        [ROOM_FORM_FIELDS.DESCRIPTION]: '',
        [ROOM_FORM_FIELDS.BOOKED_BY]: false,
        [ROOM_FORM_FIELDS.BOOKED_BY_USERNAME]: '',
        [ROOM_FORM_FIELDS.CONFIRMED]: false,
        [ROOM_FORM_FIELDS.OWNER_NAME]: username,
        [ROOM_FORM_FIELDS.OWNER_EMAIL]: userEmail,
    }, onAddRoomSubmit);
    return (
        <>
            <CommonHeader />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">
                            Add Availability
                        </h6>
                        <h1 className="mb-5">
                            Host A{" "}
                            <span className="text-primary text-uppercase">Room</span>
                        </h1>
                    </div>
                    <div className="row g-5">
                        {roomErrors.length == 0 ?
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    <div className="col-6 text-end">
                                        <img
                                            className="img-fluid rounded w-75 wow zoomIn"
                                            data-wow-delay="0.1s"
                                            src="/img/about-1.jpg"
                                            style={{ marginTop: "25%" }}
                                        />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img
                                            className="img-fluid rounded w-100 wow zoomIn"
                                            data-wow-delay="0.3s"
                                            src="/img/about-2.jpg"
                                        />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img
                                            className="img-fluid rounded w-50 wow zoomIn"
                                            data-wow-delay="0.5s"
                                            src="/img/about-3.jpg"
                                        />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img
                                            className="img-fluid rounded w-75 wow zoomIn"
                                            data-wow-delay="0.7s"
                                            src="/img/about-4.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="col-lg-6 error-box">
                                <h4>Errors</h4>
                                {roomErrors.map(error => <p key={error}>{error}</p>)}
                            </div>
                        }

                        <div className="col-lg-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form onSubmit={onSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Property Name"
                                                    name={ROOM_FORM_FIELDS.NAME}
                                                    value={values.name}
                                                    onChange={onChangeHandler}
                                                />
                                                <label htmlFor="name">Property Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="price"
                                                    placeholder="Price per night"
                                                    name={ROOM_FORM_FIELDS.PRICE}
                                                    value={values.price}
                                                    onChange={onChangeHandler}
                                                />
                                                <label htmlFor="email">Price per night </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="imageUrl"
                                                    placeholder="Property image"
                                                    name={ROOM_FORM_FIELDS.IMAGE_URL}
                                                    value={values.imageUrl}
                                                    onChange={onChangeHandler}
                                                />
                                                <label htmlFor="name">Property image</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="location"
                                                    placeholder="Property image"
                                                    name={ROOM_FORM_FIELDS.LOCATION}
                                                    value={values.location}
                                                    onChange={onChangeHandler}
                                                />
                                                <label htmlFor="name">Property location</label>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <div
                                                className="form-floating date"
                                                id="date3"
                                                data-target-input="nearest"
                                            >
                                                <input
                                                    type="text"
                                                    className="form-control datetimepicker-input"
                                                    id="checkin"
                                                    placeholder="Check In"
                                                    data-target="#date3"
                                                    data-toggle="datetimepicker"
                                                    name="checkin-availability"
                                                    value={values["checkin-availability"]}
                                                    onChange={onChangeHandler}
                                                />
                                                <label htmlFor="checkin">Available from</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div
                                                className="form-floating date"
                                                id="date4"
                                                data-target-input="nearest"
                                            >
                                                <input
                                                    type="text"
                                                    className="form-control datetimepicker-input"
                                                    id="checkout"
                                                    placeholder="Check Out"
                                                    data-target="#date4"
                                                    data-toggle="datetimepicker"
                                                    name="checkout-availability"
                                                    value={values["checkout-availability"]}
                                                    onChange={onChangeHandler}
                                                />
                                                <label htmlFor="checkout">Available to</label>
                                            </div>
                                        </div> */}
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select name={ROOM_FORM_FIELDS.ADULT} value={values.adult} onChange={onChangeHandler} className="form-select" id="select1">
                                                    <option disabled>Select</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                                <label htmlFor="select1">Adults</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select name={ROOM_FORM_FIELDS.CHILD} value={values.child} onChange={onChangeHandler} className="form-select" id="select2">
                                                    <option disabled>Select</option>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                                <label htmlFor="select2">Children</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select name={ROOM_FORM_FIELDS.BED} value={values.bed} onChange={onChangeHandler} className="form-select" id="select3">
                                                    <option disabled>Select</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                                <label htmlFor="select3">Beds</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select name={ROOM_FORM_FIELDS.BATH} value={values.bath} onChange={onChangeHandler} className="form-select" id="select4">
                                                    <option disabled>Select</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                                <label htmlFor="select4">Baths</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating" >
                                                <select name={ROOM_FORM_FIELDS.WIFI} value={values.wifi} onChange={onChangeHandler} className="form-select" id="select5">
                                                    <option disabled>Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select>
                                                <label htmlFor="select5">WiFi</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating" >
                                                <select name={ROOM_FORM_FIELDS.PARKING} value={values.parking} onChange={onChangeHandler} className="form-select" id="select6">
                                                    <option disabled>Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select>
                                                <label htmlFor="select6">Parking</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Special Request"
                                                    id="description"
                                                    style={{ height: 100 }}
                                                    name={ROOM_FORM_FIELDS.DESCRIPTION}
                                                    value={values.description}
                                                    onChange={onChangeHandler}
                                                />
                                                <label htmlFor="description">Description</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}