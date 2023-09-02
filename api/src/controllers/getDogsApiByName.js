require('dotenv').config();

const axios = require('axios');
const { URL_BASE } = process.env;

const getDogsApiByName = async (name)=>{
    try {
        const response = await axios.get(`${URL_BASE}/breeds/search?q=${name}`);
        const result = response.data; 
        const dogsApiByName = result.map((dog) => ({
            id: dog.id,
            image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            yearOfLife: dog.life_span,
        }));
        return dogsApiByName;
    } catch (error) {
        throw new Error(`Error en la solicitud a la API: ${error.message}`);        
    };
};

module.exports = getDogsApiByName;