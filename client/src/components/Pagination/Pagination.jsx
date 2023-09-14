import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';
import style from "./Pagination.module.css";

const Pagination = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalDogs = props.totalDogs;
  const dogsPerPage = 8;

  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div className={style.body}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button className={style.button}
          key={index}
          onClick={() => handlePageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
