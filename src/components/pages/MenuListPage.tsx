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
        new Todo("tree", "tree tree tree tree tree tree"),
        new Todo("pen", "pen pen pen pen pen pen"),
        new Todo("mike", "mike mike mike mike mike mike"),
        new Todo("dog", "dog dog dog dog dog dog"),
        new Todo("cat", "cat cat cat cat cat cat"),
        new Todo("iphone", "iphone iphone iphone iphone iphone iphone"),
        new Todo("book", "book book book book book book")
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
