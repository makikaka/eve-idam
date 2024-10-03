"use client";
import EventCard from '@/components/event-card';
import React, { useState, useEffect } from 'react';
import { Event } from "../../types/Event";
import EventListDisplay from './EventListDisplay';
import events from '@/assets/mock-data';

const RandomEventsList = () => {
  const [randomEvents, setRandomEvents] = useState<Event[]>([]); // State for random events
  const [isRandomFetched, setIsRandomFetched] = useState(false); // Track if random events have been fetched


  useEffect(() => {
    const fetchRandomEvents = async () => {
      if (!isRandomFetched) { // Check if random events have already been fetched
        try {
          const response = await fetch(`/api/events/random`); // Fetch random events
          const data: Event[] = await response.json();
          setRandomEvents(data); // Set random events
          setIsRandomFetched(true); // Mark random events as fetched
        } catch (error) {
          console.error('Error fetching random events:', error);
        }
      }
    };

    fetchRandomEvents(); // Call to fetch random events
  }, []); // Run only once on mount

  return (
    <div>
      <div className="mt-8">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Други Настан</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h2 className="text-2xl font-bold mb-4"></h2>
        <EventListDisplay events={events}></EventListDisplay>
      </div>
    </div>
  );
};

export default RandomEventsList;
