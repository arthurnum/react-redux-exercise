import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.onClickCallback = this.onClickCallback.bind(this);
  }

  onClickCallback() {
    this.props.itemClickCallback(this.props.item.id);
  }

  render() {
    const item = this.props.item;
    return (
      <li onClick={this.onClickCallback}>{item.name} -> {item.count}</li>
    );
  }
}

export default Item;
