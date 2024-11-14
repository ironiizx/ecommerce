import dbConnect from '@/lib/dbConnect';
import CustomizationOptions from '@/models/CustomizationOptions';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const options = await CustomizationOptions.findOne(); 
    res.status(200).json(options);
  } catch (error) {
    console.error("Error fetching customization options:", error);
    res.status(500).json({ message: 'Error fetching customization options' });
  }
}
