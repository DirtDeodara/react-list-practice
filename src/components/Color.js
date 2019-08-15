import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, rgb, hex }) {
  return (
    <dl>

      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>RGB</dt>
      <dd>{rgb ? rgb : 'unknown'}</dd>

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
  rgb: PropTypes.string,
  hex: PropTypes.string
};

export default Color;
