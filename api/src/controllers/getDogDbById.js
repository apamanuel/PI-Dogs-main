const { Dog, Temperaments } =  require('../db');
const { validate } = require('uuid');

const getDogDbById = async (id)=>{
    try {
        if(validate(id)){
            const dogDb = await Dog.findByPk(id, {
                include: Temperaments,
            });
            if(dogDb) {
                const dog = {
                    id: dogDb.id,
                    image: dogDb.image,
                    name: dogDb.name,
                    height: dogDb.height,
                    weight: dogDb.weight,
                    yearOfLife: dogDb.yearOfLife,
                    temperaments: dogDb.temperaments.map(temperament=>temperament.name).join(','),
                };
                return dog;
            };
        }
    } catch (error) {
        throw new Error(`Error en la solicitud a la Database: ${error.message}`);
        
    }
};

module.exports = getDogDbById;