import { Artist } from '@/types/Entity';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// This is a server-side component in Next.js 14
const ArtistDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch the artist data from the server-side
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/artists/${id}`, {
    cache: 'no-store', // Optional: prevents caching to always get fresh data
  });

  if (!response.ok) {
    // If the artist is not found, you can return a 404-like response
    notFound();
  }

  const artist: Artist = await response.json();


  if (!artist) {
    return <div className="flex justify-center items-center h-screen">Artist not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={artist.image} alt={artist.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{artist.location}</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{artist.name}</h1>
            <p className="mt-2 text-gray-500">{artist.city}</p>
            {/* Add more artist details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
