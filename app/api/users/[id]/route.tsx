import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //fetch data from a db
  if (params.id > 10)
    // if not found, return 404 error
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //else return data
  return NextResponse.json({ id: 1, name: "Nicole" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //validate the request body
  const body = await request.json();
  //if invalid, return 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //fetch the user with the give id
  //if doesn't exist, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //update the user
  //return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //fetch user from DB
  //if not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //delete the user
  //return 200
  return NextResponse.json({}, { status: 200 });
}

//PUT replacing an object
//PATCH updat one or more properties
