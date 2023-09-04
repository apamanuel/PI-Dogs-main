require('dotenv').config();

const axios = require('axios');
const { URL_BASE } = process.env;

const getDogApiByIp = async (id)=>{
    try {
        const response = await axios.get(`${URL_BASE}/breeds/${id}`);
        const result = response.data;
        const dogApiById = {
            id: result.id,
            image: `https://cdn2.thedogapi.com/images/${result.reference_image_id}.jpg`,
            name: result.name,
            height: result.height.metric,
            weight: result.weight.metric,
            yearOfLife: result.life_span,
            temperament: result.temperament,
        };
        return dogApiById;
    } catch (error) {
        throw new Error(`Error en la solicitud a la API: ${error.message}`);         
    }
};

module.exports = getDogApiByIp;