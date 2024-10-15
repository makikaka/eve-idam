import { Venue } from '@/types/Entity';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// This is a server-side component in Next.js 14
const VenueDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch the venue data from the server-side
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/venues/${id}`, {
    cache: 'no-store', // Optional: prevents caching to always get fresh data
  });

  if (!response.ok) {
    // If the venue is not found, you can return a 404-like response
    notFound();
  }

  const venue: Venue = await response.json();


  if (!venue) {
    return <div className="flex justify-center items-center h-screen">Venue not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={venue.image} alt={venue.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{venue.location}</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{venue.name}</h1>
            {/* Add more venue details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
