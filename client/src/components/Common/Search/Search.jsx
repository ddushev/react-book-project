import "./Search.css";

import { useRoomContext } from "../../../contexts/RoomContext";
import { searchFields } from "../../../utils/constants";
import useForm from "../../../hooks/useForm";

export const Search = () => {
    const { onRoomSearchClick } = useRoomContext();
    const { values, onChangeHandler, onSubmit } = useForm({
        [searchFields.name]: '',
        [searchFields.price]: '',
        [searchFields.adult]: '1',
        [searchFields.child]: '0',
    }, onRoomSearchClick);
    return (
        <div
            className="container-fluid booking pb-5 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="container">
                <div className="bg-white shadow" style={{ padding: 35 }}>
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-3">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="search-name"
                                            placeholder="Property Name"
                                            name={searchFields.name}
                                            value={values.name}
                                            onChange={onChangeHandler}
                                        />
                                        <label htmlFor="search-name">Property name</label>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-floating">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="search-price"
                                            placeholder="Price per night"
                                            name={searchFields.price}
                                            value={values.price}
                                            onChange={onChangeHandler}
                                        />
                                        <label htmlFor="search-price">Price per night</label>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-floating">
                                        <select name={searchFields.adult}
                                            value={values.adult}
                                            onChange={onChangeHandler}
                                            className="form-select"
                                            id="select7"
                                        >
                                            <option disabled>Select</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                        <label htmlFor="select7">Adults</label>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-floating">
                                        <select name={searchFields.child}
                                            value={values.child}
                                            onChange={onChangeHandler}
                                            className="form-select"
                                            id="select8"
                                        >
                                            <option disabled>Select</option>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                        <label htmlFor="select8">Children</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button onClick={onSubmit} className="btn btn-primary w-100 h-100">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}