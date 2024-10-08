'use client'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { EventFilters, initialEventFilters } from '@/types/EventFilters';
import EntityList from '../../components/lists/EntityList';
import EntityFilters from '@/components/filter/EntityFilterComponent';
import { eventFilterCities, eventFilterTags } from '@/assets/EventFilters';
import EventListDisplay from '@/components/lists/EventsListDisplay';

const EventsPage = () => {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<EventFilters>(() => {
    const selectedCity = searchParams.get('selectedCity') || initialEventFilters.selectedCity;
    const selectedDate = searchParams.get('selectedDate') || initialEventFilters.selectedDate;
    const selectedTag = searchParams.get('selectedTag') || initialEventFilters.selectedTag;
    const isWeekendSelected = searchParams.get('isWeekendSelected') === 'true' || initialEventFilters.isWeekendSelected;
    return { selectedCity, selectedDate, selectedTag, isWeekendSelected };
  });


  return (
    <>
      <EntityFilters<EventFilters> // Specify the type here
        filters={filters}
        setFilters={setFilters}
        cities={eventFilterCities}
        tags={eventFilterTags}
        showDateFilter={true}
      />
      <div className="mt-8 content-center">
          <EntityList EntityListDisplay={EventListDisplay} filters={filters} entityType='events' />
      </div>
    </>
  );
};

export default EventsPage;