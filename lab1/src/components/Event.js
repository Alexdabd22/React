import React from 'react';

const Event = ({ event, onClick, position }) => (
    <div className={`event ${position}`} onClick={onClick}>
        {event.title}
    </div>
);

export default Event;