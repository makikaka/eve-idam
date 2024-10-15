'use client'
import React, { useState } from 'react';
import EntityCard from '@/components/cards/EntityCard';
import EventModal from '@/components/EventModal';
import ShimmerEffect from '@/components/ShimmerEffect';
import { BaseEntity, Event } from '@/types/Entity';

interface Props {
  entities: BaseEntity[];
}

const EventsListDisplay: React.FC<Props> = ({ entities }) => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const events = entities as Event[];

  const handleCardClick = async (id: string) => {
    setSelectedEventId(id);
    setIsLoading(true);
    try {
      // Replace this with your actual API call
      console.log(id)
      const response = await fetch(`/api/events/${id}`);
      const eventData = await response.json();
      setSelectedEvent(eventData);
    } catch (error) {
      console.error('Error fetching event data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedEventId(null);
    setSelectedEvent(null);
  };

  return (
    <>
      {events.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {events.map((event) => (
            <EntityCard
              key={event.id}
              id={event.id}
              image={event.image}
              date={event.date}
              location={event.location}
              name={event.name}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">{`Не се пронајдени настани...`}</h2>
        </div>
      )}

      {isLoading ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ShimmerEffect />
        </div>
      ) : (
        <EventModal
          eventId={selectedEvent?.id!}
          isOpen={!!selectedEventId}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default EventsListDisplay;