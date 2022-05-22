const theaterLogic = require("../logic/theaters-logic");
const express = require('express');

const router = express.Router();

router.get('/', async (request, response) => {
    
    try {
        let allTheatersData = await theaterLogic.getAllTheaters();
        response.json(allTheatersData)
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message);
    }
})

module.exports = router;