'use client'
import React, { Suspense, useState, useTransition, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import EventsPageFilters from './EventsPageFilters';
import { EventFilters, initialFilters } from '@/types/EventFilters';
import EventSkeletonLoader from '@/components/loaders/event-skeleton-loader';
import EventsList from './EventList/EventList';

const EventsPage = () => {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<EventFilters>(() => {
    const selectedCity = searchParams.get('selectedCity') || initialFilters.selectedCity;
    const selectedDate = searchParams.get('selectedDate') || initialFilters.selectedDate;
    const selectedTag = searchParams.get('selectedTag') || initialFilters.selectedTag;
    const isWeekendSelected = searchParams.get('isWeekendSelected') === 'true' || initialFilters.isWeekendSelected;
    return { selectedCity, selectedDate, selectedTag, isWeekendSelected };
  });


  return (
    <>
      <EventsPageFilters filters={filters} setFilters={setFilters} />
      <div className="mt-8 content-center">
        <Suspense fallback={<EventSkeletonLoader numberOfCards={4} />}>
          <EventsList filters={filters} />
        </Suspense>
      </div>
    </>
  );
};

export default EventsPage;