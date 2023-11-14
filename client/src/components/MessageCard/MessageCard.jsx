import { useRoomContext } from '../../contexts/RoomContext';
import './MessageCard.css'

export const MessageCard = function ({
    message,
    _ownerId,
    author,
    roomOwner
}) {
    return (
        <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
            <p>
                {message}
            </p>
            <div className="d-flex align-items-center">
                <img
                    className="img-fluid flex-shrink-0 rounded"
                    src={author?.imageUrl}
                    style={{ width: 45, height: 45 }}
                />
                <div className="ps-3">
                    <h6 className="fw-bold mb-1">{`${author?.firstName} ${author?.lastName}`}</h6>
                    <small>{roomOwner == _ownerId ? 'Host' : 'Guest'}</small>
                </div>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
        </div>
    );
}