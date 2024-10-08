import React from 'react';
import { GET } from '@/app/api/events/random/route';
import EventListDisplay from "@/components/lists/EventsListDisplay"

const RandomEventsList = async () => {
  const response = await GET();
  const randomEvents = await response.json(); // Fetch random events

  return (
          <EventListDisplay entities={randomEvents}></EventListDisplay>
  );
};

export default RandomEventsList;
