const Appartment = require('../models/Appartment');
const Room = require('../models/Room');

let appart = new Appartment();

const index_get = (req, res) => {
    res.send('Hello world!');
}

const room_index = (req, res) => {
    res.render('room.ejs');
}

const appart_index = (req, res) => {
    res.render('appartment.ejs', {appartment: appart});
}

const room_create_get = (req, res) => {
    res.redirect('/room');
}

const room_create_post = (req, res) => {
    let r = new Room(req.body.name, req.body.room_width, req.body.room_length);
    appart.addRoom(r);
    res.redirect('/appartment');
}

module.exports = {
    index_get,
    room_index,
    appart_index,
    room_create_get,
    room_create_post
}