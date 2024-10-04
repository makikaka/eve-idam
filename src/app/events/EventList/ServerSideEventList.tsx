// app/events/ServerEventList.tsx
import { EventFilters } from '@/types/EventFilters';
import { Event } from '@/types/Event';
import EventListDisplay from '../EventListDisplay';

async function getEvents(filters: EventFilters): Promise<Event[]> {
  const params = new URLSearchParams();
  if (filters.selectedCity) params.append('selectedCity', filters.selectedCity);
  if (filters.selectedDate) params.append('selectedDate', filters.selectedDate);
  if (filters.selectedTag) params.append('selectedTag', filters.selectedTag);
  if (filters.isWeekendSelected) params.append('isWeekendSelected', 'true');

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events?${params.toString()}`, {
    next: { revalidate: 600 } // revalidate every hour
  });
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
}

export default async function ServerEventList({ filters }: { filters: EventFilters }) {
  const events = await getEvents(filters);
  return <EventListDisplay events={events} />;
}