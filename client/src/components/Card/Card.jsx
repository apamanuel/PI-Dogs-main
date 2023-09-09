import React from "react";
import style from "./Card.module.css"

const Card = (props)=>{
    return (
        <div className={style.card}>
            <h4>id={props.id}</h4>  
            <img src={props.image} alt={props.name}/>
            <h4>Nombre={props.name}</h4>
            <h4>Altura={props.height}</h4>
            <h4>Peso={props.weight}</h4>
            <h4>Años de Vida={props.yearOfLife}</h4>  
        </div>
    );
};

export default Card;