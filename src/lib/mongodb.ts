import mongoose from "mongoose";

export const connectMongoDB = async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_URL as string);
  try {
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
