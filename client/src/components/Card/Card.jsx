import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = (props)=>{
    return (
        <div className={style.card}>
            <Link to={`/detail/${props.id}`}>
                <img src={props.image} alt={props.name}/>
                <h4>Nombre={props.name}</h4>
                <h4>Temperamentos={props.temperaments}</h4>
                <h4>Peso={props.weight}</h4>
            </Link>            
        </div>
    );
};

export default Card;