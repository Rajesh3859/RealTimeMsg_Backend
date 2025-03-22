const mongoose = require("mongoose");

async function connectDB (){

const URI = process.env.MONGO_URI 
  try {
    const conn = await mongoose.connect(URI, { dbName: process.env.RT_DB_NAME });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
