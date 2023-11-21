import { centerRegisterFields } from './Register.module.css';

import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../../contexts/AuthContext";
import { SIGN_FORM_FIELDS } from "../../../utils/constants";
import useForm from "../../../hooks/useForm";


export const Register = () => {
    const { onRegisterSubmit, authErrors, setAuthErrors } = useAuthContext();
    const { values, onChangeHandler, onSubmit } = useForm({
        [SIGN_FORM_FIELDS.FIRST_NAME]: '',
        [SIGN_FORM_FIELDS.LAST_NAME]: '',
        [SIGN_FORM_FIELDS.EMAIL]: '',
        [SIGN_FORM_FIELDS.PASSWORD]: '',
        [SIGN_FORM_FIELDS.REPEAT_PASSWORD]: '',
        [SIGN_FORM_FIELDS.IMAGE_URL]: '',
    }, onRegisterSubmit);

    useEffect(() => {
        return () => {
            setAuthErrors([]);
        }
    }, []);
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
                    <div className={`col-md-6 ${centerRegisterFields}`}>
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder="First Name"
                                                name={SIGN_FORM_FIELDS.FIRST_NAME}
                                                value={values.firstName}
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="firstName   ">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                placeholder="Last Name"
                                                name={SIGN_FORM_FIELDS.LAST_NAME}
                                                value={values.lastName}
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="lastName">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"
                                                name={SIGN_FORM_FIELDS.EMAIL}
                                                value={values.email}
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Password"
                                                name={SIGN_FORM_FIELDS.PASSWORD}
                                                value={values.password}
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="password">Your Password</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="repeatPassword"
                                                placeholder="Repeat password"
                                                name={SIGN_FORM_FIELDS.REPEAT_PASSWORD}
                                                value={values.repeatPassword}
                                                onChange={onChangeHandler}
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
                                                placeholder="Profile Image URL"
                                                name={SIGN_FORM_FIELDS.IMAGE_URL}
                                                value={values.imageUrl}
                                                onChange={onChangeHandler}
                                            />
                                            <label htmlFor="imageUrl">Profile Image URL</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {authErrors.length == 0 ?
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
                        :
                        <div className="col-md-6 wow fadeInDown error-box">
                            <h4>Errors</h4>
                            {authErrors.map(error => <p key={error}>{error}</p>)}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}