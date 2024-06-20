import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  //fetch users from a db in a real life app
  //adding request:NextRequest to prevent cashing

  return NextResponse.json([
    { id: 1, name: "Nicole" },
    { id: 2, name: "Gabriel" },
  ]);
}

export async function POST(request: NextRequest) {
  //await can only be added if async is on the function
  const body = await request.json();
  const validation = schema.safeParse(body);
  //Validate
  //If invalid, return 400
  if (!validation.success)
    //Else, return
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
