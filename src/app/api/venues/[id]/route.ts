// eve-idam/src/app/api/events/[id]/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
import { BSON, ObjectId } from 'mongodb';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const client = await clientPromise;
    const db = client.db("eve-idam");


    const venue = await db.collection("venues").findOne({"id": Number(id)})

    if (!venue) {
      return NextResponse.json({ error: 'Venue not found' }, { status: 404 });
    }

    return NextResponse.json(venue);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}