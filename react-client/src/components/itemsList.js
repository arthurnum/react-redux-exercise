import React from 'react';
import { connect } from 'react-redux';
import Item from './item';
import ItemForm from './itemForm';
import { counter, getItems, addItem, deleteItem } from '../actions';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.itemClickCallback = this.itemClickCallback.bind(this);
    this.itemDeleteCallback = this.itemDeleteCallback.bind(this);
    this.addItemClickCallback = this.addItemClickCallback.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getItems());
  }

  itemClickCallback(id) {
    this.props.dispatch(counter(id));
  }

  itemDeleteCallback(id) {
    this.props.dispatch(deleteItem(id));
  }

  addItemClickCallback(name) {
    if (name.length === 0) { return }
    this.props.dispatch(addItem(name));
  }

  render() {
    const items = this.props.list.map((item) =>
      <Item key={item.id}
            item={item}
            itemClickCallback={this.itemClickCallback}
            itemDeleteCallback={this.itemDeleteCallback} />
    );

    return (
      <div>
        <ul>
           {items}
        </ul>
        <ItemForm addItemClickCallback={this.addItemClickCallback}/>
      </div>
    );
  }
}

export default connect( ({list}) => ({list}) )(ItemsList);
