import PropTypes from 'prop-types';
import {Link, useLocation, useNavigate} from 'react-router';

const Single = (props) => {
  const {state} = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h3>Title: {item.title}</h3>
      <p>{item.description}</p>
      {item.media_type.includes('video/') ? (
        <video src={item.filename} controls />
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
    </>
  );
};

Single.propTypes = {};

export default Single;
