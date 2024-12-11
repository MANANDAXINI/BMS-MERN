const mongoose = require("mongoose");

const dbconnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/bms', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = dbconnect;
