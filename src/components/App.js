import React from 'react';
import Colors from './Colors';

export default function App() {
  const colorsArr = [
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

  return <Colors  colorsArr={colorsArr}/>;
}
  