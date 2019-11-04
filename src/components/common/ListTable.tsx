import styled from "@emotion/styled";
import * as React from "react";

import Todo from "../../models/Todo";

interface ListTableProps extends React.Attributes {
  bodyList: Todo[];
}

const ListTable = ({ bodyList }: ListTableProps) => (
  <Table>
    <thead>
      <Tr>
        <Th>Title</Th>
        <Th>Detail</Th>
        <Th>Status</Th>
        <Th>Created At</Th>
      </Tr>
    </thead>
    <tbody>
      {bodyList.map((item, index) => (
        <Tr key={index}>
          <Td>{item.title}</Td>
          <Td>{item.detail}</Td>
          <Td>{item.isDone ? "Done" : "Not Yet"}</Td>
          <Td>{item.createdAt.toUTCString()}</Td>
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
