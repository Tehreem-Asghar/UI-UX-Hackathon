
import {client} from "@/sanity/lib/client"
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req : NextRequest) {
  const { email } = await req.json(); // Extract email from the request body

  const query = `*[_type == "customerOrder" && email == $email]{
  _id,
    customerName,
    phone,
    email,
    address,
    orderDate,
    items[] {
      product-> {
        name,
        price,
      "image" : image.asset -> url,
      },
      quantity
    },
    totalAmount,
    status
  }`;

  try {
    const data = await client.fetch(query, { email });
    return NextResponse.json(data, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
