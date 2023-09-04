const { Dog, Temperaments } = require('../db');

const createDog = async (image, name, height, weight, yearOfLife, temperament) => {
    try {
        // Verificar si el perro ya existe en la base de datos por nombre
        const [newDog, created] = await Dog.findOrCreate({
            where: {
                name: name,
            },
            defaults: {
                image: image,
                height: height,
                weight: weight,
                yearOfLife: yearOfLife,
            },
        });

        if (created) {
            // Verifica que newDog se haya creado correctamente
            if (newDog) {
                // Asocia los temperamentos al perro nuevo creado
                await newDog.addTemperaments(temperament);
                // Retorna el perro creado
                return newDog;
            } else {
                throw new Error('Error al crear el perro');
            }
        } else {
            throw new Error('El perro ya existe en la Database');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = createDog;
