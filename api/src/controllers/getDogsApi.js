require('dotenv').config();

const axios = require('axios');
const { API_KEY, URL_BASE } = process.env;

const getDogsApi = async () => {
    try {
        const response = await axios.get(`${URL_BASE}/breeds?limit=120&api_key=${API_KEY}`);
        const result = response.data; 
        const dogsApi = result.map((dog) => ({
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            yearOfLife: dog.life_span,
            temperaments: dog.temperament,
        }));

        return dogsApi;
    } catch (error) {
        throw new Error(`Error en la solicitud a la API: ${error.message}`);
    }
};

module.exports = getDogsApi;
