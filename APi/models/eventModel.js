const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    bannerImage: String,
    eventImages: [{ type: String }],
    eventStatus: String
})

module.exports = mongoose.model('events_table', eventSchema)