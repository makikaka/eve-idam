import React from 'react';
import EntityCard from '@/components/cards/EntityCard';
import { BaseEntity, EntityType, Artist } from '@/types/Entity';

interface Props {
    entities: BaseEntity[];
}

const ArtistsListDisplay: React.FC<Props> = ({ entities: entities }) => {
    
    const artists = entities as Artist[]
    return (
        entities.length > 0 ?
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {artists.map((event) => (
                     <EntityCard city={event.city} key={event.id} image={event.image} location={event.location} name={event.name} />
                ))}
            </div> : (
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">({`Не се пронајдени артисти...`})</h2>
                </div>
            )
    );
};

export default ArtistsListDisplay;