const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (e){
        console.log(`Error in DB connection: ${e.message}`);
        process.exit();
    }
} 

module.exports = connectDB;

