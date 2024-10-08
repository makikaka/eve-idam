"use client";
import React, { useState, useEffect, ReactNode, FC } from 'react';
import { Event } from "../../types/Event";
import { ArtistFilters, EventFilters, VenueFilters } from '@/types/EventFilters';
import EventSkeletonLoader from '@/components/loaders/event-skeleton-loader';
import { BaseEntity, EntityType } from '@/types/Entity';

interface Props {
  filters: EventFilters | ArtistFilters | VenueFilters;
  entityType: EntityType;
  EntityListDisplay: React.ComponentType<{entities: BaseEntity[]}>
}

const EventsList: React.FC<Props> = ({ filters, entityType, EntityListDisplay }) => {
  const [events, setEvents] = useState<BaseEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        // Construct the query parameters from the filters
        const searchParams = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value) {
            searchParams.set(key, value.toString());
          }
        });

        const response = await fetch(`/api/${entityType}?${searchParams.toString()}`);
        const data: BaseEntity[] = await response.json();
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
    <EntityListDisplay entities={events}></EntityListDisplay>
  );
};

export default EventsList;