import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.onClickCallback = this.onClickCallback.bind(this);
    this.onDeleteClickCallback = this.onDeleteClickCallback.bind(this);
  }

  onClickCallback() {
    this.props.itemClickCallback(this.props.item.id);
  }

  onDeleteClickCallback(e) {
    this.props.itemDeleteCallback(this.props.item.id);
    e.preventDefault();
  }

  render() {
    const item = this.props.item;
    return (
      <li>
        <span onClick={this.onClickCallback}>{item.name} -> {item.count}</span>
        <a href="" onClick={this.onDeleteClickCallback}>delete</a>
      </li>
    );
  }
}

export default Item;
