const theatersDal = require('../dal/theaters-dal');


const getAllTheaters = async () => {

    const allTheatersData = await theatersDal.getAllTheaters();
    return allTheatersData;

}


module.exports = {
    getAllTheaters,
}