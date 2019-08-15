import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colorsArr }) {
  const colors = colorsArr.map(color => {
    return (
      <li key={color.name}>
        <Color name={color.name} rgb={color.rgb} hex={color.hex} />
      </li>
    );
  });
  return <>{colors}</>;
}

Colors.propTypes = {
  colorsArr: PropTypes.array.isRequired
};

export default Colors;
