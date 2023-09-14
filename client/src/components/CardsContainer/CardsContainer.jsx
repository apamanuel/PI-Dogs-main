import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";

const CardsContainer = () => {
  const dogs = useSelector((state) => state.dogs);
  const sortType = useSelector((state) => state.sortType);
  const sortOrder = useSelector((state) => state.sortOrder);
  const temperament = useSelector((state) => state.temperament);
  const origin = useSelector((state) => state.origin);
  const currentPage = useSelector((state) => state.currentPage);
  const dogsPerPage = 8;

  // Calcular el rango de perros a mostrar
  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;

  // Filtrar los perros en base a temperamento y origen
  const filteredDogs = dogs.filter((dog) => {
    const dogTemperaments = dog.temperaments
      .toLowerCase()
      .split(", ")
      .map((temperament) => temperament.toLowerCase());

    // Filtrar por temperamento si se seleccionó uno
    if (temperament !== "") {
      if (!dogTemperaments.includes(temperament.toLowerCase())) {
        return false;
      }
    }

    // Filtrar por origen si se seleccionó uno
    if (origin !== "") {
      if ((origin === "API" && isNaN(dog.id)) || (origin === "Database" && !isNaN(dog.id))) {
        return false;
      }
    }

    return true;
  });

  // Ordenar los perros según el tipo de orden seleccionado
  const sortedDogs = [...filteredDogs];
  if (sortType === "name") {
    sortedDogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "weight") {
    sortedDogs.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
  }

  // Si sortOrder es 'desc', invertir el orden
  if (sortOrder === "desc") {
    sortedDogs.reverse();
  }

  const dogPage = sortedDogs.slice(startIndex, endIndex);
  console.log(sortedDogs);

  return (
    <div className={style.container}>
      {dogPage.map((dog) => (
        <Card key={dog.id} id={dog.id} image={dog.image} name={dog.name} temperaments={dog.temperaments} weight={dog.weight} />
      ))}
      <Pagination totalDogs={sortedDogs.length}/>
    </div>
  );
};

export default CardsContainer;
