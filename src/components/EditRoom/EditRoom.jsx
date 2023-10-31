import useForm from "../../hooks/useForm";
import { useRoomContext } from "../../contexts/RoomContext";
import { CommonHeader } from "../Common/CommonHeader/CommonHeader";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { dataFactory } from "../../services/requests";
import { useEffect } from "react";
import { formFields } from "../../utils/constants";

export const EditRoom = () => {
    const { token } = useAuthContext();
    const data = dataFactory(token);
    const { roomId } = useParams();
    const { onEditRoomSubmit } = useRoomContext();

    const { values, onSubmit, onChangeHandler, changeValues } = useForm({
        [formFields.name]: '',
        [formFields.price]: '',
        [formFields.imageUrl]: '',
        [formFields.adult]: '',
        [formFields.child]: '',
        [formFields.bed]: '',
        [formFields.bath]: '',
        [formFields.wifi]: '',
        [formFields.parking]: '',
        [formFields.description]: '',
    }, onEditRoomSubmit, roomId);

    useEffect(() => {
        data.getRoom(roomId)
            .then(result => {
                changeValues(result);
            });
    }, [roomId]);

    return (
        <>
            <CommonHeader />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">
                            Room Details
                        </h6>
                        <h1 className="mb-5">
                            Edit{" "}
                            <span className="text-primary text-uppercase">Details</span>
                        </h1>
                    </div>
                    <div className="row g-5">
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
                                                    name={formFields.name}
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
                                                    name={formFields.price}
                                                    value={values.price}
                                                    onChange={onChangeHandler}
                                                />
                                                <label htmlFor="email">Price per night </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Image URL"
                                                    name={formFields.imageUrl}
                                                    value={values.imageUrl}
                                                    onChange={onChangeHandler}
                                                />
                                                <label htmlFor="name">Image URL</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select name={formFields.adult} value={values.adult} onChange={onChangeHandler} className="form-select" id="select1">
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
                                                <select name={formFields.child} value={values.child} onChange={onChangeHandler} className="form-select" id="select2">
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
                                                <select name={formFields.bed} value={values.bed} onChange={onChangeHandler} className="form-select" id="select3">
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
                                                <select name={formFields.bath} value={values.bath} onChange={onChangeHandler} className="form-select" id="select4">
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
                                                <select name={formFields.wifi} value={values.wifi} onChange={onChangeHandler} className="form-select" id="select5">
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select>
                                                <label htmlFor="select5">WiFi</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating" >
                                                <select name={formFields.parking} value={values.parking} onChange={onChangeHandler} className="form-select" id="select6">
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
                                                    name={formFields.description}
                                                    value={values.description}
                                                    onChange={onChangeHandler}
                                                />
                                                <label htmlFor="description">Description</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Update
                                            </button>
                                        </div>
                                        <div className="col-12">
                                            <Link className="btn btn-secondary w-50 py-3" to={`/available-rooms/${roomId}/details`}>
                                                Back to Details
                                            </Link>
                                            <Link className="btn btn-dark w-50 py-3" to="/available-rooms">
                                                Back to Catalog
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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

                    </div>
                </div>
            </div>
        </>

    );
}