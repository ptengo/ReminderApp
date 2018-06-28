import React, { Component } from 'react'

export default class ButtonForm extends Component {

  // handleClick = (event) => {
  //   this.props.handleButtons(event)
  // }

  render() {
    return (
      <div>
        {this.props.buttons.map(button => {
          return (
            <button key={button.key} onClick={() => this.props.handleButtons(button)} >
            {/* <button key={button.key} onClick={this.handleClick(button)} > */}
              {button.name}
            </button>
          );
        })}
      </div>
    );
  }
}