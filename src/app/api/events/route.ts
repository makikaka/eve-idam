import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const client = await clientPromise;
    const db = client.db("eve-idam");

    const selectedCity = url.searchParams.get('selectedCity');
    const selectedDateParam = url.searchParams.get('selectedDate');
    const selectedDate = selectedDateParam ? new Date(selectedDateParam) : null;
    const selectedTag = url.searchParams.get('selectedTag');
    const isWeekendSelected = url.searchParams.get('isWeekendSelected') === 'true'; // Only if it's true

    let query: any = {};
    
    
    if (selectedCity) query.city = selectedCity;
    
    // Use $gte operator to find events from selectedDate onwards
    if (selectedDate) {
      if (isWeekendSelected == false)
        query.date = selectedDate
    } else {
      const today = new Date();
      query.date = { $gte: today };
    }

    // Check if the event contains the selected tag
    if (selectedTag) query.tags = { $in: [selectedTag] };

    // Only add isWeekend filter if it's true
    if (isWeekendSelected) {
      query.isWeekend = true;
    }

    // Log the query to help debug
    
    const filteredEvents = await db.collection("events").find(query).toArray();
    
    
    console.log("Constructed query:", JSON.stringify(query, null, 2));
    return NextResponse.json(filteredEvents);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}