const mongoose = require("mongoose");

// Define ticket schema
const TicketSchema = new mongoose.Schema({
    movie: { type: String, required: true },
    time: { type: String, required: true },
    seats: {
        A1: { type: Number, required: true },
        A2: { type: Number, required: true },
        A3: { type: Number, required: true },
        A4: { type: Number, required: true },
        D1: { type: Number, required: true },
        D2: { type: Number, required: true },
    },
});

// Model creation
const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
