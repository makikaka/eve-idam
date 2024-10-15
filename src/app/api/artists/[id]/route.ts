// eve-idam/src/app/api/artists/[id]/route.ts

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


    const artist = await db.collection("artists").findOne({"id": Number(id)})

    if (!artist) {
      return NextResponse.json({ error: 'Artist not found' }, { status: 404 });
    }

    return NextResponse.json(artist);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}