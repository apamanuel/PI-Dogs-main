const { Dog, Temperaments } = require('../db');
const { Op } = require('sequelize');

const getDogsDbByName = async (name)=>{
    try {
        const dogsDb = await Dog.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: Temperaments
        });
        const dogs = dogsDb.map((dog)=>{
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

module.exports = getDogsDbByName;