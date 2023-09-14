import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/actions";
import style from './OrderBy.module.css'

const OrderBy = ()=>{
    const dispatch = useDispatch();
    const sortType = useSelector((state) => state.sortType);
    const sortOrder = useSelector((state) => state.sortOrder);
    const handleSortChange = (type) => {
        // Invoca la acción para actualizar el tipo y orden de clasificación en el estado global.
        dispatch(setOrder(type, sortOrder === 'asc' ? 'desc' : 'asc'));
    };
    return (
        <div className={style.body}>
          <label>Ordenar por:</label>
          <button
            onClick={() => handleSortChange('name')}
            className={`${style.button} ${sortType === 'name' ? style.active : ''}`}
          >
            Nombre {sortType === 'name' && sortOrder === 'asc' && '↑'}
            {sortType === 'name' && sortOrder === 'desc' && '↓'}
          </button>
          <button
            onClick={() => handleSortChange('weight')}
            className={`${style.button} ${sortType === 'weight' ? style.active : ''}`}
          >
            Peso {sortType === 'weight' && sortOrder === 'asc' && '↑'}
            {sortType === 'weight' && sortOrder === 'desc' && '↓'}
          </button>
        </div>
    );
};

export default OrderBy;