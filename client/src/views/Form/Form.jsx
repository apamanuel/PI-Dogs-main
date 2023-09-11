import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Form.module.css";

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

    const [errors, setErrors] = useState({
        name:'',
        minHeight:'',
        maxHeight:'',
        minWeight:'',
        maxWeight:'',
        minYearOfLife:'',
        maxYearOfLife:'',
        temperaments:'',
    });

    const changeHandler = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]:value});
        validate({...form, [property]:value});
    };

    const validate = (form)=>{
        //Validar que el campo de nombre sea valido y no este vacio
        if(/^(?=.*\S)[\s\S]{1,50}$/.test(form.name)){
            setErrors({...errors, name: ''});
        } else setErrors({...errors, name: 'Falta completar'});
        //validar que el campo Altura minima no este vacio
        if(form.minHeight === ''){
            setErrors({...errors, minHeight: 'Falta completar'});
        } else setErrors({...errors, minHeight: ''});
        //validar que el campo Altura maxima no este vacio
        if(form.maxHeight === ''){
            setErrors({...errors, maxHeight: 'Falta completar'});
        } else setErrors({...errors, maxHeight: ''});
        //validar que el campo Peso minimo no este vacio
        if(form.minWeight === ''){
            setErrors({...errors, minWeight: 'Falta completar'});
        } else setErrors({...errors, minWeight: ''});
        //validar que el campo Peso maximo no este vacio
        if(form.maxWeight === ''){
            setErrors({...errors, maxWeight: 'Falta completar'});
        } else setErrors({...errors, maxWeight: ''});
        //validar que los valores de Altura sean correctos
        if((form.minHeight >= form.maxHeight) && form.minHeight && form.maxHeight){
            setErrors({...errors, minHeight:'Ingrese una altura valida', maxHeight:'Ingrese una altura valida'});
        } else setErrors({...errors, minHeight:'', maxHeight:''});
        //validar que los valores de Peso sean correctos
        if((form.minWeight >= form.maxWeight) && form.minWeight && form.maxWeight){
            setErrors({...errors, minWeight:'Ingrese un peso valido', maxWeight:'Ingrese un peso valido'});
        } else setErrors({...errors, minWeight:'', maxWeight:''});
        //validar que el campo Años minimo no este vacio
        if(form.minYearOfLife === ''){
            setErrors({...errors, minYearOfLife: 'Falta completar'});
        } else setErrors({...errors, minYearOfLife: ''});
        //validar que el campo Años maximo no este vacio
        if(form.maxYearOfLife === ''){
            setErrors({...errors, maxYearOfLife: 'Falta completar'});
        } else setErrors({...errors, maxYearOfLife: ''});
        //validar que los valores de Años sean correctos
        if((form.minYearOfLife >= form.maxYearOfLife) && form.minYearOfLife && form.maxYearOfLife){
            setErrors({...errors, minYearOfLife:'Ingrese un año valido', maxYearOfLife:'Ingrese un año valido'});
        } else setErrors({...errors, minYearOfLife:'', maxYearOfLife:''});

    };

    return (
        <>
            <NavBar/>
            <form>
                <div>
                    <label>Nombre: </label>
                    <input type='text'value={form.name} onChange={changeHandler} name='name'/>
                    <div className={style.error}>
                        <label>{errors.name}</label>
                    </div>
                    
                </div>
                <div>
                    <label>Altura minima: </label>
                    <input type='text'value={form.minHeight} onChange={changeHandler} name='minHeight'/>
                    <div className={style.error}>
                        <label>{errors.minHeight}</label>
                    </div>
                </div>
                <div>
                    <label>Altura maxima: </label>
                    <input type='text'value={form.maxHeight} onChange={changeHandler} name='maxHeight'/>
                    <label>{errors.maxHeight}</label>
                </div>
                <div>
                    <label>Peso minimo: </label>
                    <input type='text'value={form.minWeight} onChange={changeHandler} name='minWeight'/>
                    <label>{errors.minWeight}</label>
                </div>
                <div>
                    <label>Maximo peso: </label>
                    <input type='text'value={form.maxWeight} onChange={changeHandler} name='maxWeight'/>
                    <label>{errors.maxWeight}</label>
                </div>
                <div>
                    <label>Años de Vida minimo: </label>
                    <input type='text'value={form.minYearOfLife} onChange={changeHandler} name='minYearOfLife'/>
                    <label>{errors.minYearOfLife}</label>
                </div>
                <div>
                    <label>Años de Vida maximo: </label>
                    <input type='text'value={form.maxYearOfLife} onChange={changeHandler} name='maxYearOfLife'/>
                    <label>{errors.maxYearOfLife}</label>
                </div>
                <div>
                    <label>Temperamentos: </label>
                    <input type='text'value={form.temperaments} onChange={changeHandler} name='temperaments'/>
                    <label>{errors.temperaments}</label>
                </div>
            </form>
            <button>CREAR</button>            
        </>
    );
};

export default Form;