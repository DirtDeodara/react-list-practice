import React, { Component } from 'react';
const figlet = require('figlet');

export default class TextFormatter extends Component {
  state = {
    text: '',
    formattedText: '',
    font: 'Banner'
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = ({ target }) => {
    figlet.text(
      target.value,
      {
        font: this.state.font
      },
      (err, data) => {
        if(err) {
          console.log(err);
          return;
        }
        this.setState({ [target.name]: target.value, formattedText: data });
      }
    );
  };

  handleFontChange = ({ target }) => {
    this.setState({ font: target.value });
  }

  
  render() {

    const fontArr = ['Ghost', 'Banner'];
    const mappedFonts = fontArr.map(font => {
      return <option key={font} value={font}>{font}</option>;
    });
    const { text, formattedText, font } = this.state;
    if(formattedText) {
      console.log(this.state);
    }
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <select defaultValue={font} onChange={this.handleFontChange}>{mappedFonts}</select>
          <input
            name="text"
            value={text}
            type="text"
            onChange={this.handleChange}
          />
        </form>
        <pre>{formattedText}</pre>
      </>
    );
  }
}
