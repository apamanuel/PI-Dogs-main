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
                    id={dog.id}
                    image={dog.image}
                    name={dog.name}
                    height={dog.height}
                    weight={dog.weight}
                    yearOfLife={dog.yearOfLife}
                />
            })}        
        </div>
    );
};

export default CardsContainer;