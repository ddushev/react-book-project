import './MessagesCatalog.css'

import { MessageCard } from '../MessageCard/MessageCard';

export const MessagesCatalog = function ({ roomMessages, roomOwner }) {
    return (
        <>
            <div
                className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
                data-wow-delay="0.1s"
            >
                <div className="container">
                    <div className="owl-carousel testimonial-carousel py-5 owl-loaded owl-drag">
                        {roomMessages.map(msg => <MessageCard key={msg._id} {...msg} roomOwner={roomOwner} />)}
                    </div>
                </div>
            </div>
        </>
    );
}