import mongoose from "mongoose";
import colors from "colors";



//====================create mongodb conncetion 


export const MongoDBCnncetion =async()=>{
    try {
        const conncetion = await mongoose.connect("mongodb+srv://Ashraful:E0rRgRanXwiDTLyJ@mern.sho5qfe.mongodb.net/shop")
        console.log(`MongoDB connection successfully !`.bgGreen.cyan)
    } catch (error) {
        console.log(error.message)
    }
}