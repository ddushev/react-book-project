import './MessageCard.css'

import { useAuthContext } from '../../../contexts/AuthContext';

export const MessageCard = function ({
    message,
    _ownerId,
    author,
    roomOwner
}) {
    const { userId } = useAuthContext();
    return (
        <div className="testimonial-item position-relative bg-white rounded overflow-hidden">

            <div className="d-flex align-items-center message-details">
                <img
                    className="img-fluid flex-shrink-0 rounded"
                    src={author?.imageUrl}
                    style={{ width: 45, height: 45 }}
                />
                <div className="ps-3">
                    <h6 className="fw-bold mb-1">{userId == _ownerId ? 'You' :`${author?.firstName} ${author?.lastName}`}</h6>
                    <small>{roomOwner == _ownerId ? 'Host' : 'Guest'}</small>
                </div>
            </div>
            <p>
                {message}
            </p>
            {/* <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" /> */}
        </div>
    );
}