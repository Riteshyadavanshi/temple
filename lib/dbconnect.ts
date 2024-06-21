 // lib/dbConnect.tsx

import type _mongoose from 'mongoose';
import { connect } from 'mongoose';

declare global {
  // eslint-disable-next-line
  var mongoose: {
    promise: ReturnType<typeof connect> | null;
    conn: typeof _mongoose | null;
  };
}
 

const { MONGODB_URI } = process.env;
 
if (MONGODB_URI?.length==0) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

 
let cached = global.mongoose;

if (!cached) {
  global.mongoose = { conn: null, promise: null };
  cached = { conn: null, promise: null };
}

export const  dbConnect=async()=> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
   

    cached.promise = connect(MONGODB_URI!,  {dbName:"temple"}).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

 