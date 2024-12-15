import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Connecté à MongoDB');
    } catch (error) {
        console.log('Erreur lors de la connexion à MongoDB', error.message);
    }
}

export default connectToMongoDB;