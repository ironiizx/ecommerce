import dbConnect from '@/lib/dbConnect'; // Ajusta la ruta si es necesario
import CustomizationOptions from '@/models/CustomizationOptions';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const options = await CustomizationOptions.find(); // Obtener todos los documentos de la colección
    console.log(options); // Log para verificar la salida
    res.status(200).json(options); // Devolver los datos en formato JSON
  } catch (error) {
    console.error("Error fetching customization options:", error);
    res.status(500).json({ message: 'Error fetching customization options' });
  }
}
