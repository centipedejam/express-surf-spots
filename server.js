const express = require('express');
const path = require('path');

const surfSpotDB = require('./data/surf-spot-db');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res) {
    res.redirect('/surfspots');
})

app.get('/surfspots', function (req, res) {
    const surfSpots = surfSpotDB.getAll();
    res.render('surf-spots', { surfSpots })
})


app.listen(3000, function () {
    console.log('listening on port 3000');
})