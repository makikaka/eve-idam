import React, { useState, useEffect, Suspense } from 'react';
import { Event } from "../../../types/Event";
import EventListDisplay from '../EventListDisplay';
import { GET } from '@/app/api/events/random/route';

const RandomEventsList = async () => {
  const response = await GET();
  const randomEvents = await response.json(); // Fetch random events

  return (
          <EventListDisplay events={randomEvents}></EventListDisplay>
  );
};

export default RandomEventsList;
