const moviesDal = require('../dal/movie-dal');


const getAllMovies = async (id) => {

    const allMovieData = await moviesDal.getAllMovies(id);
    return allMovieData;

}

const addNewMovie = async (newMovieData) => {

    await moviesDal.addNewMovie(newMovieData);
    return;

}

const deleteMovie = async (id) => {

    await moviesDal.deleteMovie(id);
    return;

}


module.exports = {
    getAllMovies,
    addNewMovie,
    deleteMovie
}