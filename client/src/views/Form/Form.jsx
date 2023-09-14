import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions";
import axios from "axios";


const Form = ()=>{
    const [form, setForm] = useState({
        name:'',
        minHeight:'',
        maxHeight:'',
        minWeight:'',
        maxWeight:'',
        minYearOfLife:'',
        maxYearOfLife:'',
        temperaments:'',
    });


    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTemperaments());
    },[dispatch]);

    const temperaments = useSelector(state=>state.temperaments);

    const changeHandler = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setErrors(validate({...form, [property]:value}));
        setForm({...form, [property]:value});        
    };

    const format = (arrayOfObjects, namesString)=>{
        // Divide el string de nombres en un array de nombres
        const namesArray = namesString.split(', ');

        // Filtra los objetos del primer arreglo cuyo nombre está incluido en el segundo arreglo de nombres
        const matchingObjects = arrayOfObjects.filter(obj => namesArray.includes(obj.name));

        // Mapea los IDs de los objetos coincidentes en un nuevo arreglo
        const matchingIds = matchingObjects.map(obj => obj.id);

        return matchingIds;
    };

  

    const submitHandler = async (event)=>{
        event.preventDefault();
        const idTemperaments = format(temperaments, form.temperaments);

        try {
            const newDog = {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Coat_types_3.jpg/800px-Coat_types_3.jpg',
                name: form.name,
                height: form.minHeight + ' - ' + form.maxHeight,
                weight: form.minWeight + ' - ' + form.maxWeight,
                yearOfLife: form.minYearOfLife + ' - ' + form.maxYearOfLife,
                temperament: idTemperaments,
            };

            console.log(newDog)
            
            await axios.post('http://localhost:3001/dogs/', newDog);
    
    
            alert('Ha sido creado exitosamente');
            
        } catch (error) {
            alert(error.message);
            
        };
        

    };

    const handleTemperamentChange = (event)=>{
        const newTemperament = event.target.value;
        const newtemperaments = form.temperaments && !form.temperaments.includes(newTemperament)? 
        `${form.temperaments}, ${newTemperament}`: 
        !form.temperaments ? newTemperament: form.temperaments;
        setForm({...form, temperaments : newtemperaments});

    };

    const handleDeleteTemperament = ()=>{
        const temperament = form.temperaments.split(', ');
        temperament.pop();
        const newTemperaments = temperament.join(', ');
        setForm({...form, temperaments: newTemperaments});
    }

    const disableSubmit = ()=>{
        if(errors.name || errors.minHeight || errors.maxHeight || errors.minWeight || errors.maxWeight || errors.minYearOfLife || errors.maxYearOfLife || !form.temperaments || !form.name){
            return true;
        } else return false;
    };

    const validate = (form)=>{
        const error = {}
        //Validar el nombre
        if((/^[A-Za-z]+$/.test(form.name)) && form.name) error.name = '';
        else {
            if(!form.name) error.name = 'Campo requerido';
            else error.name = 'El nombre es incorrecto';
        };

        //Validar la altura minima
        if(form.minHeight && !isNaN(form.minHeight)) error.minHeight = '';
        else {
            if(!form.minHeight) error.minHeight = 'Campo requerido';
            else error.minHeight = 'Formato incorrecto';
        };
        
        //Validar altura maxima
        if(form.maxHeight && !isNaN(form.maxHeight)) error.maxHeight = '';
        else {
            if(!form.maxHeight) error.maxHeight = 'Campo requerido';
            else error.maxHeight = 'Formato incorrecto';
        };

        //Validar valores de altura minima y altura maxima
        if(parseFloat(form.minHeight) >= parseFloat(form.maxHeight) && form.minHeight && form.maxHeight){
            error.minHeight = 'Error en valores';
            error.maxHeight = 'Error en valores';
        };

        //Validar el peso minimo
        if(form.minWeight && !isNaN(form.minWeight)) error.minWeight = '';
        else {
            if(!form.minWeight) error.minWeight = 'Campo requerido';
            else error.minWeight = 'Formato incorrecto';
        };

        //Validar el peso maximo
        if(form.maxWeight && !isNaN(form.maxWeight)) error.maxWeight = '';
        else {
            if(!form.maxWeight) error.maxWeight = 'Campo requerido';
            else error.maxWeight = 'Formato incorrecto';
        };

        //Validar valores de peso minimo y peso maximo
        if(parseFloat(form.minWeight) >= parseFloat(form.maxWeight) && form.minWeight && form.maxWeight){
            error.minWeight = 'Error en valores';
            error.maxWeight = 'Error en valores';
        };

        //Validar año de vida minimo
        if(form.minYearOfLife && !isNaN(form.minYearOfLife)) error.minYearOfLife = '';
        else {
            if(!form.minYearOfLife) error.minYearOfLife = 'Campo requerido';
            else error.minYearOfLife = 'Formato incorrecto';
        };

        //Validar año de vida maximo
        if(form.maxYearOfLife && !isNaN(form.maxYearOfLife)) error.maxYearOfLife = '';
        else {
            if(!form.maxYearOfLife) error.maxYearOfLife = 'Campo requerido';
            else error.maxYearOfLife = 'Formato incorrecto';
        };

         //Validar valores de año de vida minimo y año de vida maximo
         if(parseFloat(form.minYearOfLife) >= parseFloat(form.maxYearOfLife) && form.minYearOfLife && form.maxYearOfLife){
            error.minYearOfLife = 'Error en valores';
            error.maxYearOfLife = 'Error en valores';
         };
        return error; 
    };    

    return (
        <div className={style.container}>
            <NavBar/>
            <h1>Formulario de Creación</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <input type='text'value={form.name} onChange={changeHandler} name='name'/>
                    {errors.name && <span>{errors.name}</span>}                    
                </div>
                <div>
                    <label htmlFor="minHeight">Altura minima: </label>
                    <input type='text'value={form.minHeight} onChange={changeHandler} name='minHeight'/>
                    {errors.minHeight && <span>{errors.minHeight}</span>}
                </div>
                <div>
                    <label htmlFor="maxHeight">Altura maxima: </label>
                    <input type='text'value={form.maxHeight} onChange={changeHandler} name='maxHeight'/>
                    {errors.maxHeight && <span>{errors.maxHeight}</span>}
                </div>
                <div>
                    <label htmlFor="minWeight">Peso minimo: </label>
                    <input type='text'value={form.minWeight} onChange={changeHandler} name='minWeight'/>
                    <span>{errors.minWeight}</span>
                </div>
                <div>
                    <label htmlFor="maxWeight">Maximo peso: </label>
                    <input type='text'value={form.maxWeight} onChange={changeHandler} name='maxWeight'/>
                    <span>{errors.maxWeight}</span>
                </div>
                <div>
                    <label htmlFor="minYearOfLife">Años de Vida minimo: </label>
                    <input type='text'value={form.minYearOfLife} onChange={changeHandler} name='minYearOfLife'/>
                    <span>{errors.minYearOfLife}</span>
                </div>
                <div>
                    <label htmlFor="maxYearOfLife">Años de Vida maximo: </label>
                    <input type='text'value={form.maxYearOfLife} onChange={changeHandler} name='maxYearOfLife'/>
                    <span>{errors.maxYearOfLife}</span>
                </div>
                <div>
                <label htmlFor="temperaments">Temperamentos: </label>
                    <select value={form.temperaments} onChange={handleTemperamentChange}>
                        <option value="">Seleccionar</option>
                        {temperaments.map(temperament => (
                            <option key={temperament.name} value={temperament.name}>
                                {temperament.name}
                            </option>
                        ))}
                    </select>
                    <span>{form.temperaments}</span>
                </div>
                <button type="button" onClick={handleDeleteTemperament}>Eliminar</button>
                <button type='submit' disabled={disableSubmit()}>CREAR</button> 
            </form>
                    
        </div>
    );
};

export default Form;
