import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const Table = ({ data }) => {
  return (
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
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ id, date, weight, chest, waist, hip, biceps, thigh, forearm }) => (
            <tr key={id}>
              <td>{date}</td>
              <td>{weight}</td>
              <td>{chest}</td>
              <td>{waist}</td>
              <td>{hip}</td>
              <td>{biceps}</td>
              <td>{thigh}</td>
              <td>{forearm}</td>
            </tr>
          )
        )}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Table;
