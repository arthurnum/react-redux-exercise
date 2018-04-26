import React from 'react';

class ItemsPagination extends React.Component {
  constructor(props) {
    super(props);

    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(step, e) {
    this.props.paginationCallback(step);
    e.preventDefault();
  }

  render() {
    return (
      <div className="pagination">
        <a href="" onClick={this.onLinkClick.bind(this, -1)}>prev</a>
        <a href="" onClick={this.onLinkClick.bind(this, 1)}>next</a>
      </div>
    );
  }
}

export default ItemsPagination;
