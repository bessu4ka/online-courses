import { useState } from 'react';

import sprite from 'images/sprite.svg';

import styled from './Pagination.module.scss';

const amountPages = 4;
const amountArray = new Array(amountPages).fill(null);

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  function nextPage() {
    setCurrentPage((prev) => prev + 1);
  }

  function prevPage() {
    setCurrentPage((prev) => prev - 1);
  }

  return (
    <div className={styled.container}>
      {currentPage !== 1 && (
        <svg onClick={prevPage}>
          <use href={sprite + '#left'} />
        </svg>
      )}
      <ul>
        {amountArray.map((_, index) => {
          return (
            <li
              key={index}
              className={index + 1 === currentPage ? styled.activePage : styled.page}
              onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </li>
          );
        })}
      </ul>
      {amountPages !== currentPage && (
        <svg onClick={nextPage}>
          <use href={sprite + '#right'} />
        </svg>
      )}
    </div>
  );
};

export { Pagination };
