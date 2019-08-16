import React from 'react';
import PropTypes from 'prop-types';

function Input({ number, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label name="text">
        Drink some water, dude.
        <input
          placeholder="input number of ounces drank."
          onChange={handleChange}
          value={number}
          name="text"
          type="number"
        />
      </label>
      <button />
    </form>
  );
}

Input.propTypes = {
  number: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Input;
