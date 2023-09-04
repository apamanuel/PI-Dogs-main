const { Temperaments } = require('../db');

const createTemperamentsDb = async (temperaments)=>{
    try {
        const newTemperaments = await Temperaments.bulkCreate(temperaments)
        return newTemperaments
    } catch (error) {
        throw new Error(`Error en la solicitud a la Database: ${error.message}`);
    };
};

module.exports = createTemperamentsDb;