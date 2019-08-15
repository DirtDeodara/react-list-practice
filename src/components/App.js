import React from 'react';
import Colors from './Colors';
import PhotoAlbum from './PhotoAlbum';
import Header from './Header';
import Footer from './Footer';
import TextFormatter from './TextFormatter';

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
    }
  ];

  const photosArr = [
    { url: 'https://www.snail-world.com/wp-content/uploads/snail-front.jpg' },
    { url: 'https://cdn.hswstatic.com/gif/snail-shell.jpg' },
    { url: 'https://images.unsplash.com/photo-1533177243638-dd485701f717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }
  ];

  return (
    <>
      {/* <Header />
      <Colors colorsArr={colorsArr} />
      <PhotoAlbum title={'Snails'} photosArr={photosArr}/>
      <Footer /> */}
      <TextFormatter />
    </>
  );
}
