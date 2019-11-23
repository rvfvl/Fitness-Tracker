import React from "react";
import styled from "styled-components";

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

const Table = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Date</th>
          <th>Weight</th>
          <th>Chest</th>
          <th>Waist</th>
          <th>Hip</th>
          <th>Hip</th>
          <th>Thigh</th>
          <th>Forearm</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(10)].map((item, i) => (
          <tr key={i}>
            <td>22 November 2019</td>
            <td>77</td>
            <td>103</td>
            <td>22</td>
            <td>55</td>
            <td>34</td>
            <td>32</td>
            <td>32</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
