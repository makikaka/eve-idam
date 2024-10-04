import { NextResponse } from 'next/server';

import clientPromise from '../../../../lib/mongodb';
import { Console } from 'console';
import { setTimeout } from 'timers/promises';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("eve-idam");
    const randomEvents = await db.collection("events").aggregate([{$sample: {size: 5}}]).toArray();
    await setTimeout(2000);
    return NextResponse.json(randomEvents);
  } catch (error) {
    console.error('Error fetching random events:', error);
    return NextResponse.json({ error: 'Failed to fetch random events. Please try again later.' });
  }
}
