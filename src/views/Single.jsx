import PropTypes from 'prop-types';
import {Link, useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="text-white- my-2 rounded-xl border-2 bg-fuchsia-700 p-2.5 hover:cursor-pointer hover:bg-fuchsia-600 hover:text-black"
      >
        Go back
      </button>
      <h3>Title: {item.title}</h3>
      <p>{item.description}</p>
      {item.media_type.includes('video/') ? (
        <video src={item.filename} controls />
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
    </div>
  );
};

Single.propTypes = {};

export default Single;
