const connection = require('./connection-wrapper');



const getAllMovies = async (id) => {
    let sql = 'SELECT movie_id AS movieId, movie_name AS movieName, theater_id AS theaterId, movie_date AS movieDate, movie_time AS movieTime, movie_length AS movieLength'
        + ' FROM movies WHERE theater_id = ?';
    let params = [id];
    const allMoviesData = await connection.executeWithParameters(sql, params)
    return allMoviesData;
}
const addNewMovie = async (newMovieData) => {
    console.log(newMovieData)
    let sql = 'INSERT INTO movies (movie_name, theater_id, movie_date, movie_time, movie_length)'
        + 'VALUES( ?, ?, ?, ?, ?)';
    let params = [newMovieData.movieName, newMovieData.theaterId, newMovieData.movieDate, newMovieData.movieTime, newMovieData.movieLength];
    await connection.executeWithParameters(sql, params)
    return;
}
const deleteMovie = async (id) => {
    let sql = 'DELETE FROM movies where movie_id = ?';
    let params = [id];
    await connection.executeWithParameters(sql, params)
    return;
}

module.exports = {
    getAllMovies,
    addNewMovie,
    deleteMovie
}