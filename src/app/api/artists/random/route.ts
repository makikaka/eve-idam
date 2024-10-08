import { NextResponse } from 'next/server';

import clientPromise from '../../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("eve-idam");
    const randomArtists = await db.collection("artists").aggregate([{$sample: {size: 12}}]).toArray();
    
    return NextResponse.json(randomArtists);
  } catch (error) {
    console.error('Error fetching random artists:', error);
    return NextResponse.json({ error: 'Failed to fetch random artists. Please try again later.' });
  }
}
