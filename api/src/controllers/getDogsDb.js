const { Dog, Temperaments } = require('../db');

const getDogsDb = async ()=>{
    try {
        const DogDb = await Dog.findAll({
            include: Temperaments,
        });
        const dogs = DogDb.map((dog)=>{
            return {
                id: dog.id,
                image: dog.image,
                name: dog.name,
                height: dog.height,
                weight: dog.weight,
                yearOfLife: dog.yearOfLife,
                temperaments: dog.temperaments.map(temperament=>temperament.name).join(','),
            };
        });
        return dogs;
    } catch (error) {
        throw new Error(`Error en la solicitud a la Database: ${error.message}`);        
    };
};

module.exports = getDogsDb