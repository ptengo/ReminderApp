import React, { Component } from 'react'

export default class ReminderForm extends Component {

  constructor() {
    super();
    this.state = {
      description: '',
      title: '',
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onAddReminder(this.state);
  }

  change(event) {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" placeholder="Enter Title" name="title" onChange={this.change.bind(this)} />
        <input type="text" placeholder="Enter Description" name="description" onChange={this.change.bind(this)} />
        <input type="submit" value="Save" />
      </form>
    );
  }
}