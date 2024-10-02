import { NextResponse } from 'next/server';
import events from '../../../../assets/mock-data';
import { Event } from '../../../../types/Event';

function getRandomElements(arr: any[], n: number) {
  const shuffled = arr.sort(() => 0.5 - Math.random()); // Shuffle the array
  return shuffled.slice(0, n); // Get the first n elements
}

export async function GET() {

  // Filter the events based on the query parameters
  const filteredEvents = events.filter((event: Event) => {
      const randomEvents = getRandomElements(events, 10); // Get 10 random events
      return NextResponse.json(randomEvents);
  });

  // Return the filtered events as a JSON response
  return NextResponse.json(filteredEvents);
}
