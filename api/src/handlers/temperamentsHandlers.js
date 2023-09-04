const createTemperamentsDb = require("../controllers/createTemperamentsDb");
const getTemperaments = require("../controllers/getTemperaments");
const getTemperamentsDb = require("../controllers/getTemperamentsDb");


const getTemperamentsHandler = async (req,res)=>{
    try {
        const temperaments = await getTemperamentsDb();
        if(temperaments.length === 0){
            const temperamentsApi = await getTemperaments();
            let newTemperaments = [];
            for(let i = 0; i < temperamentsApi.length; i++){
                const objectTemperaments = {
                    name: temperamentsApi[i],
                };
                newTemperaments.push(objectTemperaments);
            };
            const newTemperamentsDb = await createTemperamentsDb(newTemperaments);
            res.status(200).json(newTemperamentsDb);            
        } else {
            res.status(200).json(temperaments);
        };        
    } catch (error) {
        res.status(500).json({ message: error.message });        
    };
};

module.exports = getTemperamentsHandler;