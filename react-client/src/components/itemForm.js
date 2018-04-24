import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };

    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onAddButtonClick() {
    this.props.addItemClickCallback(this.state.name);
    this.setState({ name: '' });
  }

  onInputChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} value={this.state.name} />
        <button onClick={this.onAddButtonClick}>Add</button>
      </div>
    );
  }
}

export default ItemForm;
