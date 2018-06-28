import React, { Component } from 'react';

export default class Reminder extends Component {
  render() {
    return (
      <li>
        <span>{this.props.title}</span> - <span>{this.props.description}</span>
      </li>
    );
  }
}