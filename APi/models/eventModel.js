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
    datetime: {
        type: Date,
        required: true
    },
    bannerImage: { type: String },
    eventImages: [{ type: String }],
    eventStatus: { type: String }
})

module.exports = mongoose.model('events_data', eventSchema)