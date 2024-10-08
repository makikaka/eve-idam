import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const dayNames = ['нед', 'пон', 'втр', 'сре', 'чет', 'пет', 'саб'];
const monthNames = ['јан', 'феб', 'март', 'апр', 'мај', 'јуни', 'јули', 'авг', 'сеп', 'окт', 'ноем', 'дек'];

interface CardProps {
  image: string;
  name: string;
  location: string;
  city?: string; // Added city prop
  date?: string;
}

const Card: React.FC<CardProps> = ({ image, name, location, city, date }) => {
  const formattedDate = date ? formatDate(new Date(date)) : null;

  return (
    <div className="w-[275px] bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-[175px] object-cover rounded-t-lg" />
      <div className="p-4">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          {formattedDate && <span>{formattedDate}</span>}
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            {location ? location : city}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
    </div>
  );
};

const formatDate = (date: Date): string => {
  return `${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]}`;
};

export default Card;