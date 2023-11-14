import { useLocation, useParams } from "react-router-dom";

import { useMessageContext } from "../../contexts/MessageContext";

import useForm from "../../hooks/useForm";
import { messageFormFields } from "../../utils/constants";
import { useEffect } from "react";

export const SendMessage = () => {
    const locationPathname = useLocation().pathname;
    const { roomId } = useParams();

    const { onSendMessageSubmit, messageErrors, setMessageErrors } = useMessageContext();

    useEffect(() => {
        return () => {
            setMessageErrors([]);
        }
    }, []);

    const { values, onChangeHandler, onSubmit } = useForm({
        [messageFormFields.message]: '',
        [messageFormFields.roomId]: roomId
    }, onSendMessageSubmit);

    return (

        <div className="container-xxl py-5">
            {locationPathname == `/reservation-confirmed/${roomId}/send-message-to-host` ?
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">
                            Send message
                        </h6>
                        <h1 className="mb-5">
                            <span className="text-primary text-uppercase">Message</span> your host
                        </h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form onSubmit={onSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: 300 }}
                                                    name={messageFormFields.message}
                                                    onChange={onChangeHandler}
                                                    value={values.message}
                                                />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Send message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {
                            messageErrors.length == 0 ?
                                <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                                    <img
                                        className="position-relative rounded w-100 h-100"
                                        src="/img/about-1.jpg"
                                        frameBorder={0}
                                        style={{ minHeight: 250, border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex={0}
                                    />
                                </div> :
                                <div className="col-lg-6 error-box">
                                    <h4>Errors</h4>
                                    {messageErrors.map(error => <p key={error}>{error}</p>)}
                                </div>
                        }
                    </div>
                </div>
                :
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">
                            Send message
                        </h6>
                        <h1 className="mb-5">
                            <span className="text-primary text-uppercase">Message</span> your guest
                        </h1>
                    </div>
                    <div className="row g-4">
                        {
                            messageErrors.length == 0 ?
                                <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                                    <img
                                        className="position-relative rounded w-100 h-100"
                                        src="/img/about-1.jpg"
                                        frameBorder={0}
                                        style={{ minHeight: 250, border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex={0}
                                    />
                                </div> :
                                <div className="col-lg-6 error-box">
                                    <h4>Errors</h4>
                                    {messageErrors.map(error => <p key={error}>{error}</p>)}
                                </div>
                        }
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form onSubmit={onSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: 300 }}
                                                    name={messageFormFields.message}
                                                    onChange={onChangeHandler}
                                                    value={values.message}
                                                />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Send message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}