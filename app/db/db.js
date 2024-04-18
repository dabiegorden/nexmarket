import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL);
    connection.isConnected = db.connection.readyState;
  } catch (error) {
    throw new Error(error);
  }
};
