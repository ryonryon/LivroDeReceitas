import styled from "@emotion/styled";
import * as React from "react";

interface ListTableProps extends React.Attributes {
  titleList: string[];
  bodyList: string[];
}

const ListTable = ({ titleList, bodyList }: ListTableProps) => (
  <Table>
    <thead>
      <Tr>
        {titleList.map((title, index) => {
          <Td key={index}>{title}</Td>;
        })}
        <Th>title</Th>
      </Tr>
    </thead>
    <tbody>
      {bodyList.map((item, index) => (
        <Tr key={index}>
          <Td>{item}</Td>
        </Tr>
      ))}
    </tbody>
  </Table>
);

const Table = styled.table`
  margin: 8px auto;
  border-collapse: collapse;
  border-spacing: 0;
  width: 90%;
`;

const Tr = styled.tr`
  border-bottom: solid 1px #eee;
  cursor: pointer;
`;

const Th = styled.th`
  text-align: center;
  width: 25%;
  padding: 15px 0;
`;

const Td = styled.td`
  text-align: center;
  width: 25%;
  padding: 15px 0;
`;

export default ListTable;
