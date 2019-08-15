import React from 'react';
import PropTypes from 'prop-types';

function Photo({ url }) {
  return (
    <>
      <img src={url} width="150px" height="100px"></img>
    </>
  );
}
Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;
