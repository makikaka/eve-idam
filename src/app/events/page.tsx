'use client'
import React, { Suspense, useState } from 'react';
import EventsPageFilters from './EventsPageFilters';
import EventsList from './EventList/EventList';
import { EventFilters, initialFilters } from '@/types/EventFilters';
import Loading from './loading';

const EventsPage = () => {
  const [filters, setFilters] = useState<EventFilters>(initialFilters);
  return (
    <>
      <EventsPageFilters filters={filters} setFilters={setFilters} />
      <div className="mt-8 content-center">

        <Suspense fallback={<Loading />}>
          <EventsList filters={filters} />
        </Suspense>
      </div>
    </>

  );
};

export default EventsPage;