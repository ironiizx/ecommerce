import mongoose from 'mongoose';

const customizationOptionsSchema = new mongoose.Schema({
  modelOptions: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  colorOptions: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
  interiorOptions: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
});

export default mongoose.models.CustomizationOptions || mongoose.model('CustomizationOptions', customizationOptionsSchema);
