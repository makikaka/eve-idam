'use client'
import React, { useState } from 'react';
import EventsPageFilters from './EventsPageFilters';
import EventsList from './EventList';
import { EventFilters, initialFilters } from '@/types/EventFilters';
import RandomEventsList from './RandomEventsList';

const EventsPage = () => {
  const [filters, setFilters] = useState<EventFilters>(initialFilters);
  return (
    <div className="container mx-auto px-4 py-8">
      <EventsPageFilters filters={filters} setFilters={setFilters} />
      <div className="mt-8 content-center">
      <EventsList filters={filters} />
      <RandomEventsList />  
      </div>
    </div>
  );
};

export default EventsPage;