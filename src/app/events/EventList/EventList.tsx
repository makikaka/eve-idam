"use client";
import React, { useState, useEffect } from 'react';
import { Event } from "../../../types/Event";
import { EventFilters } from '@/types/EventFilters';
import EventListDisplay from '../EventListDisplay';
import EventSkeletonLoader from '@/components/loaders/event-skeleton-loader';

interface Props {
  filters: EventFilters;
}

const EventsList: React.FC<Props> = ({ filters }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents(); // Fetch events on filter change
  }, [filters]); // Run on filter changes

  if (isLoading) {
    return <EventSkeletonLoader numberOfCards={events?.length}/>;
  }

  return (
    <EventListDisplay events={events}></EventListDisplay>
  );
};

export default EventsList;