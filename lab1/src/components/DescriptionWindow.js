import React from 'react';

const DescriptionWindow = ({ event }) => (
    <div className="description-window">
        <h2>{event.title}</h2>
        <iframe
            src={event.wikiLink}
            title={event.title}
            width="100%"
            height="400px"
        />
    </div>
);

export default DescriptionWindow;
