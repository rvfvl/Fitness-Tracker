import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
`;

const PaginationButton = styled.button`
  & + & {
    margin-left: 5px;
  }

  padding: 5px;
  color: ${({ theme }) => theme.colors.inactive};
  background-color: transparent;
  border: 0;
  font-weight: 700;
  cursor: pointer;

  ${({ activePage }) =>
    activePage &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ navigationButton }) =>
    navigationButton &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
    `}
`;

const Pagination = ({ data, setPaginatedData }) => {
  const limitPerPage = 5;
  const totalPages = Math.ceil(data.length / limitPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const paginateResults = arr => {
    const slicedArray = [...arr]
      .reverse()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage);
    setPaginatedData(slicedArray);
  };

  useEffect(() => {
    paginateResults(data);
  }, [currentPage, data]);

  return (
    <PaginationWrapper>
      {currentPage > 1 && (
        <PaginationButton
          type="button"
          navigationButton
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          PREV
        </PaginationButton>
      )}

      {Array.from(Array(totalPages)).map((page, i) => (
        <PaginationButton
          type="button"
          key={i}
          activePage={currentPage === i + 1}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </PaginationButton>
      ))}

      {currentPage < totalPages && (
        <PaginationButton
          type="button"
          navigationButton
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          NEXT
        </PaginationButton>
      )}
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPaginatedData: PropTypes.func.isRequired
};

export default Pagination;
