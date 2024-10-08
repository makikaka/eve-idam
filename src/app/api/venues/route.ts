import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const client = await clientPromise;
    const db = client.db("eve-idam");

    const selectedCity = url.searchParams.get('selectedCity');
    const selectedTag = url.searchParams.get('selectedTag');

    let query: any = {};
    
    // Adjusting the query for venues
    if (selectedCity) query.city = selectedCity;

    // Check if the venue contains the selected tag
    if (selectedTag) query.tags = { $in: [selectedTag] };

    const filteredVenues = await db.collection("venues").find(query).toArray();
    
    // console.log("Constructed query:", JSON.stringify(query, null, 2));
    return NextResponse.json(filteredVenues);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}