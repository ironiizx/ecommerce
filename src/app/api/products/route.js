import dbConnect from '@/app/database/dbConnect';
import Product from '@/app/models/Product';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();

    const products = await Product.find().sort({ name: "asc" });

    return NextResponse.json({ message: 'Ok', products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ message: 'Error', error: error.message });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    return NextResponse.json({ message: 'Ok', products: [] });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ message: 'Error', error: error.message });
  }
}
