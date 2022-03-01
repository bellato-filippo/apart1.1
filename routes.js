const express = require('express');
const { append } = require('express/lib/response');
const controller = require('./controllers/controller')

const router = express.Router();



router.get('/', controller.index_get);
router.get('/room', controller.room_index);
router.get('/appartment', controller.appart_index);
router.get('/appartment/newroom', controller.room_create_get);
router.post('/appartment', controller.room_create_post);

module.exports = router;