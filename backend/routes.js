const express = require("express");
const route = express.Router();
const Ticket = require("./Schema");

// POST route to create a booking
route.post('/booking', async (req, res) => {
    const { movie, time, seats } = req.body;
    try {
        const mydata = new Ticket({ movie, time, seats });
        const saved = await mydata.save();
        res.status(200).json({ data: saved, message: 'Booking Successful' });
    } catch (error) {
        res.status(500).json({
            data: null,
            message: 'Something went wrong, try again',
        });
    }
});

// GET route to fetch the latest booking
route.get('/booking', async (req, res) => {
    try {
        const mydata = await Ticket.find().sort({ _id: -1 }).limit(1); // Fetch the latest booking
        if (!mydata || mydata.length === 0) {
            res.status(200).json({ data: null, message: 'No previous data' });
        } else {
            res.status(200).json({ data: mydata[0], message: 'Data retrieved successfully' });
        }
    } catch (error) {
        res.status(500).json({
            data: null,
            message: 'Something went wrong',
        });
    }
});

module.exports = route;
