import React from 'react';
import { connect } from 'react-redux';
import Item from './item';
import { counter, getItems } from '../actions';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.itemClickCallback = this.itemClickCallback.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getItems());
  }

  itemClickCallback(id) {
    this.props.dispatch(counter(id));
  }

  render() {
    const items = this.props.list.map((item) =>
      <Item key={item.id}
            item={item}
            itemClickCallback={this.itemClickCallback} />
    );

    return (
      <ul>
         {items}
      </ul>
    );
  }
}

export default connect( ({list}) => ({list}) )(ItemsList);
