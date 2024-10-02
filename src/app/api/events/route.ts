import { NextResponse } from 'next/server';
import events from '../../../assets/mock-data';
import { Event } from '../../../types/Event';

function getRandomElements(arr: any[], n: number) {
  const shuffled = arr.sort(() => 0.5 - Math.random()); // Shuffle the array
  return shuffled.slice(0, n); // Get the first n elements
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  
  if (url.pathname === '/random-events') {
    const randomEvents = getRandomElements(events, 10); // Get 10 random events
    return NextResponse.json(randomEvents);
  }
  
  // Get the query parameters from the request
  const selectedCity = url.searchParams.get('selectedCity');
  const selectedDate = url.searchParams.get('selectedDate');
  const selectedTag = url.searchParams.get('selectedTag');
  const isWeekendSelected = url.searchParams.get('isWeekendSelected') === 'true';

  // Filter the events based on the query parameters
  const filteredEvents = events.filter((event: Event) => {
    const matchesCity = selectedCity ? event.city === selectedCity : true;
    const matchesDate = isWeekendSelected ? true : (selectedDate ? event.date === selectedDate : true);
    const matchesTag = selectedTag ? event.tags.includes(selectedTag) : true;
    const matchesWeekend = isWeekendSelected ? event.isWeekend : true;
    

    return matchesCity && matchesDate && matchesTag && matchesWeekend;
  });

  // Return the filtered events as a JSON response
  return NextResponse.json(filteredEvents);
}
