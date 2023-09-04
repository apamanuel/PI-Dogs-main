const { Dog } = require('../db');
const { Op } = require('sequelize');

const getDogsDbByName = async (name)=>{
    try {
        const dogsDb = await Dog.findAll({
            where:{
                name:{
                    [Op.iLike]: `%${name}%`
                }
            },
        });
        return dogsDb;
    } catch (error) {
        throw new Error(`Error en la solicitud a la Database: ${error.message}`);        
    };
};

module.exports = getDogsDbByName;