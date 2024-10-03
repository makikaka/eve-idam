"use client";
import React, { useState, useEffect } from 'react';
import { Event } from "../../types/Event";
import { EventFilters } from '@/types/EventFilters';
import EventListDisplay from './EventListDisplay';

interface Props {
  filters: EventFilters;
}

const EventsList: React.FC<Props> = ({ filters }) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Construct the query parameters from the filters
        const params = new URLSearchParams();
        if (filters.selectedCity) params.append('selectedCity', filters.selectedCity);
        if (filters.selectedDate) params.append('selectedDate', filters.selectedDate);
        if (filters.selectedTag) params.append('selectedTag', filters.selectedTag);
        if (filters.isWeekendSelected) params.append('isWeekendSelected', 'true');

        const response = await fetch(`/api/events?${params.toString()}`);
        const data: Event[] = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents(); // Fetch events on filter change
  }, [filters]); // Run on filter changes


  return (
    <EventListDisplay events={events}></EventListDisplay>
  );
};

export default EventsList;
