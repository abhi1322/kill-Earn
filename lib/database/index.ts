import mongoose from "mongoose";

// Define a function to connect to the database
export const connectDB = async (): Promise<boolean> => {
  try {
    const mongoUrl = process.env.MONGODB_URL;

    // Ensure mongoUrl is defined and not an empty string
    if (!mongoUrl) {
      throw new Error("MONGODB_URL environment variable is not defined.");
    }

    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB");
    return true;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    return false;
  }
};
