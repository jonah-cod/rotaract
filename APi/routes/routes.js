const router = require('express').Router();
const {
    signInController,
    createEvent,
    updateEvent,
    editEvent,
    deleteEvent,
    getAllEvents,
    getEventById
} = require('../controllers/controller')


router.get('/events', getAllEvents);
router.get('/event', getEventById);


router.post('/signin', signInController);
router.post('/event', createEvent);
router.post('/edit', editEvent);
router.post('update', updateEvent);
router.post('delete', deleteEvent);

module.exports = router