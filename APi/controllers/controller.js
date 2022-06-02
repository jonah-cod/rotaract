const eventSchemaCopy = require('../models/eventModel')

module.exports = {
    signInController: (req, res) => {
        const newEvent = new eventSchemaCopy({
            ...req.body
        })

        newEvent.save().then(resp => {
            console.log(resp._id)
            res.send()
        })

    },
    createEvent: (req, res) => {

    },
    updateEvent: (req, res) => {

    },
    editEvent: (req, res) => {

    },
    deleteEvent: (req, res) => {

    },


    getAllEvents: (req, res) => {

    },
    getEventById: (req, res) => {

    }
}