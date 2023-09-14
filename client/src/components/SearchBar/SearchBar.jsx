import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogsByName } from '../../redux/actions';
import style from './SearchBar.module.css';

const SearchBar = () => {
    const [raza, setRaza] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setRaza(event.target.value);
    };

    const onSearch = () => {
        dispatch(getDogsByName(raza));
    };

    return (
        <div className={style.main}>
            <input 
                type="text"
                placeholder="Escribe la raza de perro a buscar"
                onChange={handleInputChange}
                className={style.input}
            />
            <button onClick={onSearch} className={style.button}>Buscar</button>
        </div>
    );
};

export default SearchBar;
