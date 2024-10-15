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


    const event = await db.collection("events").findOne({"id": Number(id)})

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}