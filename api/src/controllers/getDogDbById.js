const { Dog, Temperaments } =  require('../db');
const { validate } = require('uuid');

const getDogDbById = async (id)=>{
    try {
        if(validate(id)){
            const dogDb = Dog.findByPk(id, {
                include: Temperaments,
            });
            if(dogDb) return dogDb;
        }
    } catch (error) {
        throw new Error(`Error en la solicitud a la Database: ${error.message}`);
        
    }
};

module.exports = getDogDbById;