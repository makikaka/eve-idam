"use client";
import EventCard from '@/components/event-card';
import React, { useState, useEffect } from 'react';
import { Event } from "../../types/Event";
import { EventFilters } from '@/types/EventFilters';

interface Props {
  filters: EventFilters;
}

const EventsList: React.FC<Props> = ({ filters }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [randomEvents, setRandomEvents] = useState<Event[]>([]); // State for random events
  const [isRandomFetched, setIsRandomFetched] = useState(false); // Track if random events have been fetched

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

  useEffect(() => {
    const fetchRandomEvents = async () => {
      if (!isRandomFetched) { // Check if random events have already been fetched
        try {
          const response = await fetch(`/api/events/random`); // Fetch random events
          const data: Event[] = await response.json();
          setRandomEvents(data); // Set random events
          setIsRandomFetched(true); // Mark random events as fetched
        } catch (error) {
          console.error('Error fetching random events:', error);
        }
      }
    };

    fetchRandomEvents(); // Call to fetch random events
  }, []); // Run only once on mount

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-center">
        {events?.length > 0 ? events.map((event) => (
          <EventCard key={event.id} event={event} />
        )) :
          <div>
            <h2 className="text-2xl font-bold mb-4">Не се пронајдени настани...</h2>
          </div>}

      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Други Настани</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {randomEvents.map((event) => ( // Use randomEvents state
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsList;
