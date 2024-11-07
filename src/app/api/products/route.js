import dbConnect from '@/app/database/dbConnect';
import Product from '@/app/models/Product';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Conectar a la base de datos
    await dbConnect();

    // Obtener los productos desde la base de datos
    const products = await Product.find().sort({ name: "asc" });

    // Devolver los productos como respuesta JSON
    return NextResponse.json({ message: 'Ok', products });
  } catch (error) {
    console.error("Error fetching products:", error);
    // Devolver un mensaje de error en caso de fallo
    return NextResponse.json({ message: 'Error', error: error.message });
  }
}

export async function POST(request) {
  try {
    // Procesar la solicitud si necesitas agregar o filtrar productos (puedes expandirlo más tarde)
    const data = await request.json();
    // Aquí puedes hacer algo con `data`, como agregar o filtrar productos

    return NextResponse.json({ message: 'Ok', products: [] });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ message: 'Error', error: error.message });
  }
}
