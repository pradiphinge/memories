import mongoose from 'mongoose'
import 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            });
        console.log(`Mongo DB Connected :${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log('error connecting db :', error);
        process.exit(1);
    }
}
export default connectDB;