const { Temperaments } = require('../db');

const getTemperamentsDb = async()=>{
    try {
        const temperamentsDb = await Temperaments.findAll();
        return temperamentsDb
    } catch (error) {
        throw new Error(`Error en la solicitud a la Database: ${error.message}`);
    };    
};

module.exports = getTemperamentsDb;