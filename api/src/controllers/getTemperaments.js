require('dotenv').config();

const axios = require('axios');
const { URL_BASE } = process.env;

const getTemperaments = async ()=>{
    try {
        let uniqueTemperaments = [];
        const response = await axios.get(`${URL_BASE}/breeds`);
        const dogs = response.data;
        dogs.forEach((dog) => {
            if(dog.temperament){
                const temperaments = dog.temperament.split(', ');
                temperaments.forEach((temperament)=>{
                    if(!uniqueTemperaments.includes(temperament)){
                        uniqueTemperaments.push(temperament); 
                    };
                });                
            };  
        });
        return uniqueTemperaments
    } catch (error) {
        throw new Error(`Error en la solicitud a la API: ${error.message}`);        
    }

};

module.exports=getTemperaments;