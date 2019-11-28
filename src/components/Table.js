import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "components/Button";
import Pagination from "components/Pagination";

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;

  th {
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  tr {
    height: 25px;

    &:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.background};
    }

    td {
      border-bottom: 1px solid black;
      text-align: center;
    }
  }
`;

const Table = ({ data, deleteDocument }) => {
  const [paginatedData, setPaginatedData] = useState([]);

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>Date</th>
            <th>Weight</th>
            <th>Chest</th>
            <th>Waist</th>
            <th>Hip</th>
            <th>Biceps</th>
            <th>Thigh</th>
            <th>Forearm</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(
            ({
              id,
              date,
              weight,
              chest,
              waist,
              hip,
              biceps,
              thigh,
              forearm
            }) => (
              <tr key={id}>
                <td>{date}</td>
                <td>{weight}</td>
                <td>{chest}</td>
                <td>{waist}</td>
                <td>{hip}</td>
                <td>{biceps}</td>
                <td>{thigh}</td>
                <td>{forearm}</td>
                <td>
                  <Button actionBtn onClick={() => deleteDocument(id)}>
                    -
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </StyledTable>
      <Pagination setPaginatedData={setPaginatedData} data={data} />
    </>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteDocument: PropTypes.func.isRequired
};

export default Table;
