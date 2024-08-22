import mongoose from "mongoose";

const connectDB = () =>{

    const DatabaseURL = 'mongodb+srv://Arpit:Arpit1551@cluster0.ng0e7tq.mongodb.net';
    const DB_Name = 'Testimonial-Clone'


    try {
        mongoose.connect(`${DatabaseURL}/${DB_Name}`);
        console.log('Your Database is connected')        
    } catch (error) {
        throw error
    }
};

export default connectDB;