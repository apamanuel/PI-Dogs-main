import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = ()=>{
    const dogs = useSelector(state=>state.dogs);
    return (
        <div className={style.container}>
            {dogs.map((dog)=>{
                return <Card
                    image={dog.image}
                    name={dog.name}
                    temperaments={dog.temperaments}
                    weight={dog.weight}
                />
            })}        
        </div>
    );
};

export default CardsContainer;