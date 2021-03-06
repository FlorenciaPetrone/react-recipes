import React from "react";
import "./styles.css";

const Pagination = ({ number, offset, totalResults, ...props }) => {
  const currentPage = offset === 0 ? 1 : Math.floor(offset / number) + 1;
  const restPages = Math.floor((totalResults - offset) / number);

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 1}
        className="button-hover"
        onClick={() => props.changePage("previous")}
      >
        Previous
      </button>

      {currentPage !== 1 && (
        <button
          className="button-hover"
          onClick={() => props.changePage("previous")}
        >
          {currentPage - 1}
        </button>
      )}
      <button disabled className="current-page pagination-button">
        {currentPage}
      </button>
      {restPages > 0 && (
        <button
          className="button-hover"
          onClick={() => props.changePage("next")}
        >
          {currentPage + 1}
        </button>
      )}
      {restPages - 1 > 0 && <p className="p-button">...</p>}
      {restPages - 1 > 0 && <p className="p-button">{restPages - 1}</p>}
      <button
        disabled={restPages === 0}
        className="button-hover"
        onClick={() => props.changePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
