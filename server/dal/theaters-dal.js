const connection = require('./connection-wrapper');



const getAllTheaters = async () => {
    let sql = 'SELECT theater_id AS theaterId, theater_name AS theaterName FROM theaters';

    const allTheatersData = await connection.execute(sql)
    return allTheatersData;
}

module.exports = {
    getAllTheaters
}