import React, { useState } from 'react';
import Event from './Event';
import DescriptionWindow from './DescriptionWindow';

const Timeline = ({ events }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className="timeline-container">
            <div className="events">
                {events.map((event, index) => (
                    <Event
                        key={event.id}
                        event={event}
                        onClick={() => handleEventClick(event)}
                        position={index % 2 === 0 ? 'top' : 'bottom'}
                    />
                ))}
            </div>
            <div className="timeline-line"></div>
            {selectedEvent && <DescriptionWindow event={selectedEvent} />}
        </div>
    );
};

export default Timeline;
