import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogById } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Detail.module.css"

const Detail = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogById(id))
    },[dispatch, id]);

    const dog = useSelector(state=>state.dog);

    console.log(dog);

    return (
        <div className={style.body}>
            <NavBar/>
            <div className={style.main}>                
                <h4>ID = {dog.id}</h4>
                <img src={dog.image} alt={dog.name} className={style.detailImage} />
                <h4 className={style.detailTitle}>{dog.name}</h4>
                <h4 className={style.detailValue}>Altura = {dog.height}</h4>
                <h4 className={style.detailValue}>Peso = {dog.weight}</h4>
                <h4 className={style.detailValue}>{dog.temperaments}</h4>
                <h4 className={style.detailValue}>Años de Vida = {dog.yearOfLife}</h4>
            </div>
            
        </div>
    );
};

export default Detail;