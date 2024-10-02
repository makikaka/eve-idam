"use client"
import { EventFilters } from '@/types/EventFilters';
import React, { useState } from 'react';
import { FaChevronDown, FaCalendar, FaMoon, FaGlassCheers, FaDice, FaFootballBall, FaGuitar, FaTheaterMasks, FaPaintBrush, FaHamburger, FaFilm, FaLaptopCode } from "react-icons/fa";

const cities = ['Скопје', 'Битола', 'Охрид', 'Струмица', 'Прилеп', 'Куманово', 'Тетово', 'Велес'];

const eventTags = [
  { name: 'Nights Out', icon: FaMoon },
  { name: 'Clubbing', icon: FaGlassCheers },
  { name: 'Board Games', icon: FaDice },
  { name: 'Sport', icon: FaFootballBall },
  { name: 'Live Music', icon: FaGuitar },
  { name: 'Theater', icon: FaTheaterMasks },
  { name: 'Art Exhibition', icon: FaPaintBrush },
  { name: 'Food Festival', icon: FaHamburger },
  { name: 'Cinema', icon: FaFilm },
  { name: 'Tech Meetup', icon: FaLaptopCode },
];

interface Props {
  filters: EventFilters;
  setFilters: React.Dispatch<React.SetStateAction<EventFilters>>;
}

const EventsPageFilters: React.FC<Props> = ({ filters, setFilters }) => {
  const [selectedTag, setSelectedTag] = useState(filters.selectedTag); // Initialize with current filter
  
  const [isWeekendSelected, setIsWeekendSelected] = useState(filters.isWeekendSelected); //

  const handleCityChange = (city: string) => {
    setFilters({ ...filters, selectedCity: city });
  };

  const handleDateChange = (date: string) => {
    setFilters({ ...filters, selectedDate: date, isWeekendSelected: false });
  };

  const handleDateQuickSelect = (option: string) => {
    const today = new Date();
    let newDate;

    switch (option) {
      case 'today':
        newDate = today;
        setFilters({ ...filters, selectedDate: newDate.toISOString().split('T')[0], isWeekendSelected: false });
        break;
      case 'tomorrow':
        newDate = new Date(today.setDate(today.getDate() + 1));
        setFilters({ ...filters, selectedDate: newDate.toISOString().split('T')[0], isWeekendSelected: false });
        break;
      case 'weekend':
        setFilters({ ...filters, isWeekendSelected: true, selectedDate: '' });
        return;
      default:
        newDate = today;
        setFilters({ ...filters, selectedDate: newDate.toISOString().split('T')[0], isWeekendSelected: false });
    }
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
    setFilters({ ...filters, selectedTag: tag }); // Update filters with selected tag
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {/* City Dropdown */}
        <div className="relative">
          <select
            value={filters.selectedCity}
            onChange={(e) => handleCityChange(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out text-gray-900"
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-4 w-4" />
          </div>
        </div>

        {/* Date Picker */}
        <div className="relative">
          <input
            type="date"
            value={filters.selectedDate}
            onChange={(e) => {
              handleDateChange(e.target.value);
              setIsWeekendSelected(false);
            }}
            className={`appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out text-gray-900 ${filters.isWeekendSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={filters.isWeekendSelected}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaCalendar className="h-4 w-4" />
          </div>
        </div>

        {/* Quick Date Selectors */}
        <div className="flex space-x-2">
          {['Today', 'Tomorrow'].map((option) => (
            <button
              key={option}
              onClick={() => handleDateQuickSelect(option.toLowerCase())}
              className={`px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out ${filters.isWeekendSelected ? '' : 'bg-white'}`}
            >
              {option}
            </button>
          ))}
          <button
            onClick={() => handleDateQuickSelect('weekend')}
            className={`px-3 py-2 border border-gray-300 rounded-md text-sm font-medium ${filters.isWeekendSelected ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out`}
          >
            Weekend
          </button>
        </div>
      </div>

      {/* Event Tags */}
      <div className="overflow-x-auto pb-2">
        <div className="flex space-x-4">
          {eventTags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => handleTagSelect(tag.name)} // Update filters on tag selection
              className={`flex flex-col items-center p-2 rounded-md transition duration-150 ease-in-out ${
                selectedTag === tag.name ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <tag.icon className="text-2xl mb-1" />
              <span className="text-xs">{tag.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPageFilters;