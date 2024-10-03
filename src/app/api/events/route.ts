import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(req: Request) {
  try {

    const url = new URL(req.url);
    const client = await clientPromise;
    const db = client.db("eve-idam");
    
    const selectedCity = url.searchParams.get('selectedCity');
    const selectedDate = url.searchParams.get('selectedDate');
    const selectedTag = url.searchParams.get('selectedTag');
    const isWeekendSelected = url.searchParams.get('isWeekendSelected') === 'true';

    let query: any = {};

    if (selectedCity) query.city = selectedCity;
    if (selectedDate) query.date = selectedDate;
    if (selectedTag) query.tags = selectedTag;
    if (isWeekendSelected) query.isWeekend = true;

    const filteredEvents = await db.collection("events").find(query).toArray();

    return NextResponse.json(filteredEvents);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
  }
}