'use client'
import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArtistFilters, initialArtistFilters } from '@/types/EventFilters';
import EventSkeletonLoader from '@/components/loaders/event-skeleton-loader';
import EntityList from '../../components/lists/EntityList';
import EntityFilters from '@/components/filter/EntityFilterComponent';
import { artistsFilterTags, eventFilterCities, eventFilterTags } from '@/assets/EventFilters';
import EventListDisplay from '@/components/lists/EventsListDisplay';
import ArtistsListDisplay from '@/components/lists/ArtistsListDisplay';

const ArtistsPage = () => {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<ArtistFilters>(() => {
    const selectedCity = searchParams.get('selectedCity') || initialArtistFilters.selectedCity;
    const selectedTag = searchParams.get('selectedTag') || initialArtistFilters.selectedTag;
    return { selectedCity,  selectedTag };
  });


  return (
    <>
      <EntityFilters<ArtistFilters> filters={filters} setFilters={setFilters} cities={eventFilterCities} tags={artistsFilterTags} showDateFilter={false} />
      <div className="mt-8 content-center">
          <EntityList EntityListDisplay={ArtistsListDisplay} filters={filters} entityType='artists' />
      </div>
    </>
  );
};

export default ArtistsPage;