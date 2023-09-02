const getDogApiByIp = require('../controllers/getDogApiByIp');
const getDogsApi = require('../controllers/getDogsApi');
const getDogsApiByName = require('../controllers/getDogsApiByName');

const getDogsHandler = async (req, res) => {
    try {
        const { name } = req.query;
        if(name){
            const dogs = await getDogsApiByName(name);
            res.status(200).json(dogs);
        } else {
            const dogs = await getDogsApi();
            res.status(200).json(dogs);
        };
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const getDogHandler = async (req,res)=>{
    try {
        const {id}= req.params;
        const dog = await getDogApiByIp(id);
        res.status(200).json(dog);
    } catch (error) {
        res.status(500).json({ message: error.message });        
    };    
};

const createDogHandler = (req,res)=>{
    res.send('NIY: Esta ruta crea un nuevo perro recibiendo los datos por body');
};

module.exports= {getDogsHandler, getDogHandler,createDogHandler};