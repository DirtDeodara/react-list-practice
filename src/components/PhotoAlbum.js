import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ title, photosArr }) {
  return (
    <>
      <h2>{title}</h2>
      <Photos photosArr={photosArr}/>
    </>
  );
}
PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photosArr: PropTypes.array.isRequired
};

export default PhotoAlbum;
