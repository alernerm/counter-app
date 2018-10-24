import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  componentDidUpdate(prevProps, prevState) {
    //here we can check if anyting change and make an addit' Ajax request to get data
    //console.log('prevProps', prevProps);
    //console.log('prevState', prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      //get Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm">
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}>
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
