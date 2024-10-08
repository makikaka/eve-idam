import React from 'react';
import { GET } from '@/app/api/venues/random/route';
import VenuesListDisplay from "@/components/lists/VenuesListDisplay"

const RandomVenuesList = async () => {
  const response = await GET();
  const randomVenues = await response.json(); // Fetch random venues

  return (
          <VenuesListDisplay entities={randomVenues}></VenuesListDisplay>
  );
};

export default RandomVenuesList;
