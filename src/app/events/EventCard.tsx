import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Event } from '../../types/Event';

const dayNames = ['нед', 'пон', 'втр', 'сре', 'чет', 'пет', 'саб'];
const monthNames = ['јан', 'феб', 'март', 'апр', 'мај', 'јуни', 'јули', 'авг', 'сеп', 'окт', 'ноем', 'дек'];

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const date = new Date(event.date);
  const formattedDate = `${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]}`;

  return (
    <div className="w-[275px] bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={event.image} alt={event.name} className="w-full h-[175px] object-cover rounded-t-lg" />
      <div className="p-4">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>{formattedDate}</span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            {event.location}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{event.name}</h3>
      </div>
    </div>
  );
};

export default EventCard;