import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return true;

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to Mongo");
    return true;
  } catch (error) {
    console.log(error);
  }
};
