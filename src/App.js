// React
import React, { Component } from 'react';

// Components
import Header from './components/header.component';
import ReminderList from './components/reminder-list.component';
import ReminderForm from './components/reminder-form.component';
import ButtonForm from './components/button-form.component';

class App extends Component {
  constructor() {
    super();
    this.addReminder = this.addReminder.bind(this);
    this.buttonsHandler = this.buttonsHandler.bind(this);
    this.handleOnAddReminder = this.handleOnAddReminder.bind(this);
    this.id = 1;
    this.state = {
      reminders: [],
      buttons: [{ name: 'Delete All', key: 'deleteAll' }]
    };
  }

  buttonsHandler(buttonData) {
    console.log('buttonData', buttonData);
    if (buttonData.key === 'deleteAll') {
      this.setState({ reminders: [] })
    }
  }

  handleOnAddReminder(data) {
    var reminder = { id: this.id };
    Object.keys(data).forEach(key => {
      reminder[key] = data[key];
    });
    this.id++;

    this.setState({
      reminders: this.state.reminders.concat([reminder])
    });
  }

  addReminder(reminderTitle) {
    var reminder = { id: this.id, title: reminderTitle };
    this.id++;

    this.setState({
      reminders: this.state.reminders.concat([reminder])
    });
  }

  render() {
    return (
      <div>
        <Header addReminder={this.addReminder} />
        <ReminderList reminders={this.state.reminders} />
        <ReminderForm onAddReminder={this.handleOnAddReminder} />
        {/* {this.state.form ? <Form group={this.state.form.group}>
          <input type="text" name="name" />
        </Form> : null} */}

        <ButtonForm buttons={this.state.buttons} handleButtons={this.buttonsHandler} />
      </div>
    );
  }
}

export default App;