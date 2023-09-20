import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch(`https://api.pawan.krd/gtranslate?from=en&to=es&text=hello`);
    const data = await res.json();
    return NextResponse.json(data);
}