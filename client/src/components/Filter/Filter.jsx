import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByTemperament, filterByOrigin } from '../../redux/actions';
import style from './Filter.module.css';


const Filter = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector(state => state.temperaments);

  const [selectedTemperament, setSelectedTemperament] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');


  const handleTemperamentChange = event => {
    setSelectedTemperament(event.target.value);
    dispatch(filterByTemperament(event.target.value)); // Envia la acción para filtrar por temperamento
  };

  const handleOriginChange = event => {
    setSelectedOrigin(event.target.value);
    dispatch(filterByOrigin(event.target.value)); // Envia la acción para filtrar por origen
  };

  return (
    <div className={style.body}>
      <label>
        Filtrar por Temperamento:
        <select value={selectedTemperament} onChange={handleTemperamentChange} className={style.select}>
          <option value="">Todos</option>
          {temperaments.map(temperament => (
            <option key={temperament.name} value={temperament.name}>
              {temperament.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Filtrar por Origen:
        <select value={selectedOrigin} onChange={handleOriginChange} className={style.select}>
          <option value="">Todos</option>
          <option value="API">API</option>
          <option value="Database">Database</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
