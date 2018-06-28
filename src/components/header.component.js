import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputItem from './input-item.component';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addReminder(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>Tasks</h1>
        <InputItem
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
          />
      </header>
    );
  }
}

Header.propTypes = {
  addReminder: PropTypes.func.isRequired
};

export default Header;
