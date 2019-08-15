import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors() {

  const colorArr = [
    {
      name: 'red',
      rgb: {
        r: 255,
        g: 0,
        b: 0
      },
      hex: 'FF0000'
    },
    {
      name: 'green',
      rgb: {
        r: 0,
        g: 255,
        b: 0
      },
      hex: '00FF00'
    },
    {
      name: 'blue',
      rgb: {
        r: 0,
        g: 0,
        b: 255
      },
      hex: '0000FF'
    }
  ];

  const colors = colorArr.map(color => {
    return (
      <>
        <Color name={color.name} rgb={color.rgb} hex={color.hex} />
      </>
    )
  })
  return (
    <>
      {colors}
    </>
  );
}

Colors.PropTypes = {
  colorsArr: PropTypes.array.isRequired,
};

export default Colors;