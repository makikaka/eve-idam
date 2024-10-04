'use client'
import React, { Suspense, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import EventsPageFilters from './EventsPageFilters';
import { EventFilters, initialFilters } from '@/types/EventFilters';
import Loading from './loading';
import ServerEventList from './EventList/ServerSideEventList';
import EventSkeletonLoader from '@/components/loaders/event-skeleton-loader';

const EventsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [filters, setFilters] = useState<EventFilters>(() => {
    // Initialize filters from URL params or use initial filters
    const selectedCity = searchParams.get('selectedCity') || initialFilters.selectedCity;
    const selectedDate = searchParams.get('selectedDate') || initialFilters.selectedDate;
    const selectedTag = searchParams.get('selectedTag') || initialFilters.selectedTag;
    const isWeekendSelected = searchParams.get('isWeekendSelected') === 'true' || initialFilters.isWeekendSelected;
    return { selectedCity, selectedDate, selectedTag, isWeekendSelected };
  });

  const updateFilters = (newFilters: EventFilters) => {
    setFilters(newFilters);
    startTransition(() => {
      const params = new URLSearchParams();
      if (newFilters.selectedCity) params.set('selectedCity', newFilters.selectedCity);
      if (newFilters.selectedDate) params.set('selectedDate', newFilters.selectedDate);
      if (newFilters.selectedTag) params.set('selectedTag', newFilters.selectedTag);
      if (newFilters.isWeekendSelected) params.set('isWeekendSelected', 'true');
      router.push(`/events?${params.toString()}`);
    });
  };

  return (
    <>
      <EventsPageFilters filters={filters} setFilters={updateFilters} />
      <div className="mt-8 content-center">
        <Suspense fallback={<EventSkeletonLoader numberOfCards={4} />}>
          <ServerEventList filters={filters} />
        </Suspense>
      </div>
    </>
  );
};

export default EventsPage;