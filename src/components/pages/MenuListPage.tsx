import styled from "@emotion/styled";
import * as React from "react";

import TodoListTable from "../common/ListTable";
import TextInput from "../common/TextInput";
import Todo from "../../models/Todo";

interface Props {}

interface State {
  initialItem: Todo[];
  items: Todo[];
}

class MenuListPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      initialItem: [
        new Todo("apple", "apple apple apple apple apple apple"),
        new Todo("tree", "apple apple apple apple apple apple"),
        new Todo("pen", "apple apple apple apple apple apple"),
        new Todo("mike", "apple apple apple apple apple apple"),
        new Todo("dog", "apple apple apple apple apple apple"),
        new Todo("cat", "apple apple apple apple apple apple"),
        new Todo("iphone", "apple apple apple apple apple apple"),
        new Todo("book", "apple apple apple apple apple apple")
      ],
      items: []
    };
  }

  componentDidMount() {
    this.setState({ items: this.state.initialItem });
  }

  filterList = (val: string) => {
    const updateList = this.state.initialItem.filter(item => {
      return item.title.toLowerCase().search(val.toLowerCase()) !== -1;
    });
    this.setState({ items: updateList });
  };

  render() {
    return (
      <MenuListSection>
        <TextInput placeholder="search" filter={this.filterList} />
        <TodoListTable bodyList={this.state.items} />
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
