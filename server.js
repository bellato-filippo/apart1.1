const express = require('express');
const session = require('express-session');
const routes = require('./routes');

let port = 3000;

let app = express();

app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(port, function() {
    console.log('Server running on port ' + port);
});