import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  //fetch users from a db in a real life app

  return NextResponse.json("hello");
}
