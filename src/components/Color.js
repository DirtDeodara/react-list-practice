import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, rgb, hex }) {
  return (
    <dl>

      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>R</dt>
      <dd>{rgb ? rgb.r : 'unknown'}</dd>
      <dt>G</dt>
      <dd>{rgb ? rgb.g : 'unknown'}</dd>
      <dt>B</dt>
      <dd>{rgb ? rgb.b : 'unknown'}</dd>

      {hex && (
        <>
          <dt>HEX</dt>
          <dd>{hex}</dd>
        </>
      )}
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  rgb: PropTypes.shape({
    r: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired 
  }).isRequired,
  hex: PropTypes.string.isRequired
};

export default Color;
