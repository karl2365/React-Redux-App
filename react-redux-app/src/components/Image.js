import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import './components.css';
import { fetchImageUrl } from '../store/actions';

const Image = props => {
  const getImage = e => {
    e.preventDefault();
    props.fetchImageUrl();
  };

  if (props.isFetching) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }
  if (props.error) {
    return <div className='imageContainer'><h1>{props.error}</h1><button onClick={getImage}>Try Again</button>
    </div>
  }
  return (
    <div className='imageContainer'>
      <button onClick={getImage}>GO!</button>
      {props.imageUrl ? (
        <img src={props.imageUrl} alt='props.imageUrl' />
      ) : (
        <p>Fetch an imageUrl</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    imageUrl: state.imageUrl
  };
};
export default connect(
  mapStateToProps,
  { fetchImageUrl }
)(Image);
