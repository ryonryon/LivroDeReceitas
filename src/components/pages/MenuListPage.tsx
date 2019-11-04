import styled from "@emotion/styled";
import * as React from "react";

import ListTable from "../common/ListTable";
import TextInput from "../common/TextInput";

interface Props {}

interface State {
  initialItem: string[];
  items: string[];
}

class MenuListPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      initialItem: [
        "apple",
        "tree",
        "pen",
        "mike",
        "dog",
        "cat",
        "iphone",
        "book"
      ],
      items: []
    };
  }

  componentDidMount() {
    this.setState({ items: this.state.initialItem });
  }

  filterList = (val: string) => {
    const updateList = this.state.initialItem.filter(item => {
      return item.toLowerCase().search(val.toLowerCase()) !== -1;
    });
    this.setState({ items: updateList });
  };

  render() {
    return (
      <MenuListSection>
        <TextInput placeholder="search" filter={this.filterList} />
        <ListTable titleList={["todo"]} bodyList={this.state.items} />
      </MenuListSection>
    );
  }
}

const MenuListSection = styled.div`
  width: 80%;
  margin: 32px auto;
  text-align: center;
`;

export default MenuListPage;
