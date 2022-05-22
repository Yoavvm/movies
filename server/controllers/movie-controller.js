const movieLogic = require("../logic/movie-logic");
const express = require('express');

const router = express.Router();

router.get('/:id', async (request, response) => {
    const id = request.params.id

    try {
        let allMovieData = await movieLogic.getAllMovies(id);
        response.json(allMovieData)
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message);
    }
})

router.post('/', async (request, response) => {
    

    try {
        await movieLogic.addNewMovie(request.body);
        response.json('movie added to database')
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message);
    }
})

router.delete('/:id', async (request, response) => {
    const id = request.params.id
    try {
        await movieLogic.deleteMovie(id);
        response.json('movie removed from database')

    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message);
    }
})

module.exports = router;