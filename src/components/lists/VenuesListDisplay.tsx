import React from 'react';
import EntityCard from '@/components/cards/EntityCard';
import { BaseEntity, EntityType, Venue } from '@/types/Entity';

interface Props {
    entities: BaseEntity[];
}

const VenuesListDisplay: React.FC<Props> = ({ entities: entities }) => {
    const venues = entities as Venue[]
    return (
        entities.length > 0 ?
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {venues.map((event) => (
                    <EntityCard key={event.id} image={event.image} location={event.location} name={event.name} />
                ))}
            </div> : (
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">({`Не се пронајдени локали...`})</h2>
                </div>
            )
    );
};

export default VenuesListDisplay;