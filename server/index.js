const express = require('express');
const cors = require('cors');

const app = express()

const theaterController = require('./controllers/theater-controller')
const movieController = require('./controllers/movie-controller')

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.use('/theaters', theaterController)
app.use('/movies', movieController)

app.listen(3001, () => console.log('listening on port 3001'));