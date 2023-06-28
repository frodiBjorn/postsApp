import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = getPagesArray(totalPages)
  return (
    <div className="page__wrapper">{pagesArray.map(p =>
      <span
        key={p}
        onClick={() => {
          changePage(p)
        }}
        className={page === p ? 'page__number page__number-current' : 'page__number'}>{p}
        </span>)}
    </div>
  );
};

export default Pagination;
