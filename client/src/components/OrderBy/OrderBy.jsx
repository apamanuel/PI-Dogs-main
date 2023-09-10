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
          <h4>Ordenar por:</h4>
          <button
            onClick={() => handleSortChange('name')}
            className={sortType === 'name' ? 'active' : ''}
          >
            Nombre {sortType === 'name' && sortOrder === 'asc' && '↑'}
            {sortType === 'name' && sortOrder === 'desc' && '↓'}
          </button>
          <button
            onClick={() => handleSortChange('weight')}
            className={sortType === 'weight' ? 'active' : ''}
          >
            Peso {sortType === 'weight' && sortOrder === 'asc' && '↑'}
            {sortType === 'weight' && sortOrder === 'desc' && '↓'}
          </button>
        </div>
    );
};

export default OrderBy;