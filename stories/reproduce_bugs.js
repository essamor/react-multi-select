import React, { Component } from "react";
import Button from "material-ui/Button";
import ReactMultiSelect from "../src/components/multi_select";

class ReproduceBugs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.generateItems(1),
      selectedItems: []
    };
  }

  generateItems(size) {
    return Array.apply(null, { length: size }).map((i, index) => ({
      id: index,
      label: `Item ${index}`
    }));
  }

  clearAll() {
    this.setState({ items: [] });
  }

  setItems(size) {
    this.setState({ items: this.generateItems(size) });
  }

  selectItemAtIndex(index) {
    this.setState({ selectedItems: [this.state.items[index]] });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={() => this.clearAll()}>
          Clear all
        </Button>
        <Button color="secondary" onClick={() => this.setItems(10)}>
          Set 10 items
        </Button>
        <Button onClick={() => this.selectItemAtIndex(0)}>
          Select 1st item
        </Button>
        <ReactMultiSelect
          items={this.state.items}
          selectedItems={this.state.selectedItems}
          loading={false}
          showSearch={true}
          showSelectAll={true}
        />
      </div>
    );
  }
}

export default ReproduceBugs;
