import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  placeholder: string;
  filter: Function;
}

const TextInput = ({ placeholder, filter }: Props) => (
  <Input
    type="text"
    placeholder={placeholder}
    onChange={e => filter(e.target.value)}
  />
);

const Input = styled.input`
  width: 90%;
  height: 2em;
`;

export default TextInput;
