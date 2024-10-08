import React from 'react';
import { GET } from '@/app/api/artists/random/route';
import ArtistsListDisplay from "@/components/lists/ArtistsListDisplay"

const RandomArtistsList = async () => {
  const response = await GET();
  const randomArtists = await response.json(); // Fetch random artists

  return (
          <ArtistsListDisplay entities={randomArtists}></ArtistsListDisplay>
  );
};

export default RandomArtistsList;
