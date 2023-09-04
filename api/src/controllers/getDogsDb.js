const { Dog } = require('../db');

const getDogsDb = async ()=>{
    try {
        const DogDb = Dog.findAll();
        return DogDb;
    } catch (error) {
        throw new Error(`Error en la solicitud a la Database: ${error.message}`);        
    };
};

module.exports = getDogsDb