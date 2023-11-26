import './MessagesCatalog.css'

import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import { MessageCard } from './MessageCard/MessageCard';

export const MessagesCatalog = function ({ roomMessages, roomData }) {
    const { userId } = useAuthContext();
    return (
        <>
            <div
                className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
                data-wow-delay="0.1s"
            >
                <div className="container">
                    <div className="owl-carousel testimonial-carousel py-5 owl-loaded owl-drag">
                        {roomMessages.map(msg => <MessageCard key={msg._id} {...msg} roomOwner={roomData?._ownerId} />)}
                    </div>
                </div>
                <div className="button-center ">
                    <Link className="btn btn-sm btn-primary rounded py-2 px-4 send-message" to={roomData?._ownerId == userId ?
                        `/reservation-confirmed/${roomData?._id}/send-message-to-guest` :
                        `/reservation-confirmed/${roomData?._id}/send-message-to-host`}
                    >
                        Send message
                    </Link>
                </div>
            </div>
        </>
    );
}