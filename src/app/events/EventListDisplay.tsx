import React from 'react';
import EventCard from '@/components/event-card';
import { Event } from "../../types/Event";

interface Props {
    events: Event[];
}

const EventListDisplay: React.FC<Props> = ({ events }) => {
    return (
        events.length > 0 ?
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {events.map((event) => (

                    <EventCard key={event.id} event={event} />
                ))}
            </div> : (
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Не се пронајдени настани...</h2>
                </div>
            )
    );
};

export default EventListDisplay;