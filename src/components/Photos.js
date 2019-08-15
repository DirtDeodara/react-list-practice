import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photosArr }) {
  const photos = photosArr.map(photo => {
    return (
      <li key={photo.url}>
        <Photo url={photo.url}/>
      </li>
    );
  });
  return (
    <>
    {photos}
    </>
  );
}

Photos.propTypes = {
  photosArr: PropTypes.array.isRequired
};

export default Photos;
