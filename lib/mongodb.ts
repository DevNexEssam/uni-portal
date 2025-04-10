import mongoose from "mongoose";
const MONGO_URI= process.env.MONGO_URI as string;

if(!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}

const cached = (global as any).mongoose || { conn: null, promise: null };

const ConnectDB = async () => {
    if(cached.conn) return cached.conn;

    if(!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose) 
    }

    cached.conn = await cached.promise;
    return cached.conn;

}