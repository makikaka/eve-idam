'use client'
import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BaseFilters, EventFilters, initialVenueFilters, VenueFilters } from '@/types/EventFilters';
import EventSkeletonLoader from '@/components/loaders/event-skeleton-loader';
import EntityList from '../../components/lists/EntityList';
import EntityFilters from '@/components/filter/EntityFilterComponent';
import { artistsFilterTags, eventFilterCities, eventFilterTags, venueFilterTags } from '@/assets/EventFilters';
import EventListDisplay from '@/components/lists/EventsListDisplay';
import ArtistsListDisplay from '@/components/lists/ArtistsListDisplay';
import VenuesListDisplay from '@/components/lists/VenuesListDisplay';

const VenuesPage = () => {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<VenueFilters>(() => {
    const selectedCity = searchParams.get('selectedCity') || initialVenueFilters.selectedCity;
    const selectedTag = searchParams.get('selectedTag') || initialVenueFilters.selectedTag;
    return {selectedCity, selectedTag};
  });


  return (
    <>
      <EntityFilters<VenueFilters> filters={filters} setFilters={setFilters} cities={eventFilterCities} tags={venueFilterTags} showDateFilter={false} />
      <div className="mt-8 content-center">
          <EntityList EntityListDisplay={VenuesListDisplay} filters={filters} entityType='venues' />
      </div>
    </>
  );
};

export default VenuesPage;