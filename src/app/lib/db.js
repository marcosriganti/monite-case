import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;
    if (connectionState === 1) {
        console.log('connected');
        return;
    }
    if (connectionState === 2) {
        console.log('connecting');
        return;
    }
    try {
        mongoose.connect(MONGO_URI, {
            dbName: 'monite',
            bufferCommands: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (err) {
        console.error(err);
    }

};

export default connect;