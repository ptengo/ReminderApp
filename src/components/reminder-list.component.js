import React, { Component } from 'react';
import Reminder from './reminder.component';

export default class ReminderList extends Component {
  render() {
    return (
      <ul>
        {this.props.reminders.map(r => {
          return (
            <Reminder
              key={r.id}
              title={r.title}
              description={r.description}
            />
          );
        })}
      </ul>
    );
  }
}