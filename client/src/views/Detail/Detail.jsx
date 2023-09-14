import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogById } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";

const Detail = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogById(id))
    },[dispatch, id]);

    const dog = useSelector(state=>state.dog);

    return (
        <div>
            <NavBar/>
            <h4>ID={dog.id}</h4>
            <img src={dog.image} alt={dog.name}/>
            <h4>Nombre={dog.name}</h4>
            <h4>Altura={dog.height}</h4>
            <h4>Peso={dog.weight}</h4>
            <h4>Temperamentos={dog.temperaments}</h4>
            <h4>Años de Vida={dog.yearOfLife}</h4>
        </div>
    );
};

export default Detail;