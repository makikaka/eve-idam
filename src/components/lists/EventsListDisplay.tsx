import React from 'react';
import EntityCard from '@/components/cards/EntityCard';
import { BaseEntity, EntityType, Event } from '@/types/Entity';

interface Props {
    entities: BaseEntity[];
}

const EventsListDisplay: React.FC<Props> = ({ entities: entities }) => {
    
    const events = entities as Event[]
    return (
        entities.length > 0 ?
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {events.map((event) => (
                    <EntityCard key={event.id} image={event.image} date={event.date} location={event.location} name={event.name} />
                ))}
            </div> : (
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">{`Не се пронајдени настани...`}</h2>
                </div>
            )
    );
};

export default EventsListDisplay;