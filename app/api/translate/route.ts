import { NextResponse } from "next/server";

interface TranslateData {
  to: string;
  from: string;
  text: string;
}

// Modify the route to accept query parameters
export async function GET(req:any) {
    const { to, from, text } = req.query as {
      to: string;
      from: string;
      text: string;
    };

  const response = await fetch(
    `https://api.pawan.krd/gtranslate?from=${from}&to=${to}&text=${text}`
  );
  const data = await response.json();

  return NextResponse.json(
    {
      data,
    },
    { status: 200 }
  );
}
