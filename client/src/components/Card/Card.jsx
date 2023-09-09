import React from "react";
import style from "./Card.module.css"

const Card = (props)=>{
    return (
        <div className={style.card}>  
            <img src={props.image} alt={props.name}/>
            <h4>Nombre={props.name}</h4>
            <h4>Temperamentos={props.temperaments}</h4>
            <h4>Peso={props.weight}</h4>
        </div>
    );
};

export default Card;