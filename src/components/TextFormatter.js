import React, { Component } from 'react';
const figlet = require('figlet');

export default class TextFormatter extends Component {
  state = {
    text: '',
    formattedText: '',
    font: 'Banner',
    color: ''
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

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }
  
  handleFontChange = ({ target }) => {
    this.setState({ font: target.value });
  }

  render() {

    const fontArr = ['Ghost', 'Banner'];
    const mappedFonts = fontArr.map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    const { text, formattedText, font, color } = this.state;
    if(formattedText) {
      console.log(this.state);
    }
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="color" name="color" value={color} onChange={this.handleColorChange}></input>
          <select defaultValue={font} onChange={this.handleFontChange}>{mappedFonts}</select>
          <input
            name="text"
            value={text}
            type="text"
            onChange={this.handleChange}
          />
        </form>
        <pre style={{ color: color } }>{formattedText}</pre>

      </>
    );
  }
}
