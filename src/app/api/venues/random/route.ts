import { NextResponse } from 'next/server';

import clientPromise from '../../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("eve-idam");
    const randomVenues = await db.collection("venues").aggregate([{$sample: {size: 12}}]).toArray();
    
    return NextResponse.json(randomVenues);
  } catch (error) {
    console.error('Error fetching random venues:', error);
    return NextResponse.json({ error: 'Failed to fetch random venues. Please try again later.' });
  }
}
