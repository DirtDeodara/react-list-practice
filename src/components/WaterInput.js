import React from 'react';
import PropTypes from 'prop-types';

function WaterInput({ text, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label name="text">Drink some water, dude.
        <input placeholder="input number of ounces drank." onChange={handleChange} value={text} name="text" type="text" />
      </label>
      <button></button>
    </form>
  );
}

WaterInput.propTypes = {
  text: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default WaterInput;
