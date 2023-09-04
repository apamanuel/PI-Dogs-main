const getDogApiByIp = require('../controllers/getDogApiByIp');
const getDogDbById = require('../controllers/getDogDbById');
const getDogsApi = require('../controllers/getDogsApi');
const getDogsApiByName = require('../controllers/getDogsApiByName');
const getDogsDb = require('../controllers/getDogsDb');
const getDogsDbByName = require('../controllers/getDogsDbByName');
const createDog = require('../controllers/createDog');

const getDogsHandler = async (req, res) => {
    try {
        const { name } = req.query;
        if(name){
            const dogsApi = await getDogsApiByName(name);
            const dogsDb = await getDogsDbByName(name);
            const allDogsByName = [...dogsDb,...dogsApi];
            res.status(200).json(allDogsByName);
        } else {
            const dogsApi = await getDogsApi();
            const dogsDb = await getDogsDb();
            const allDogs = [...dogsDb,...dogsApi];
            res.status(200).json(allDogs);
        };
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const getDogHandler = async (req,res)=>{
    try {
        const {id}= req.params;
        const dogDb = await getDogDbById(id);
        if(dogDb){
            res.status(200).json(dogDb);
        } else {
            const dogApi = await getDogApiByIp(id);
            res.status(200).json(dogApi);
        };     
    } catch (error) {
        res.status(500).json({ message: error.message });        
    };    
};

const createDogHandler = async (req,res)=>{
    try {
        const { image, name, height, weight, yearOfLife, temperament } = req.body;
        if(!image || !name || !height || !weight || !yearOfLife || !temperament){
            throw new Error('Faltan datos para la creacion');
        };
        const newDog = await createDog(image, name, height, weight, yearOfLife, temperament);
        res.status(200).json(newDog);
    } catch (error) {
        return res.status(500).json({ message: error.message });          
    }
    
};

module.exports= {getDogsHandler, getDogHandler,createDogHandler};