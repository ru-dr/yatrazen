import { NextRequest, NextResponse } from "next/server";

//localhost:3000/api/weather
export async function GET(request:any) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");
  let url = "";
  if (address) {
    url =
      `https://api.openweathermap.org/data/2.5/weather?q=
      ${address}&appid=f41de57a75335bc3f2f2494622acc720`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f41de57a75335bc3f2f2494622acc720`;
  }
  console.log(url);
  const res = await fetch(url);

  const data = await res.json();
  return NextResponse.json({ data });
}