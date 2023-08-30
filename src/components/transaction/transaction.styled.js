import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  border-spacing: 0;
  margin: 50px auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const TableHeader = styled.thead`
  background-color: #dfcfd4;
`;

export const TableHeaderCell = styled.th`
  padding: 15px;
  text-align: left;
  font-weight: bold;
`;

export const TableBody = styled.tbody`
  font-size: 20px;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #fce1e7;
  }
`;

export const TableCell = styled.td`
  padding: 15px;
`;
