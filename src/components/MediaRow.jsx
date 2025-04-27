import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';

const MediaRow = (props) => {
  const {item, setSelectedItem} = props;
  const {user, handleAutoLogin} = useUserContext();
  // const handleClick = () => setSelectedItem(item);
  return (
    <tr className="*:border-1 *:border-[#ccc] *:p-4" key={item.media_id}>
      <td>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-52 object-cover"
        />
      </td>
      <td>{item.title}</td>
      <td>{item.username}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        {/* <button onClick={handleClick}>View</button> */}
        <Link
          to="/single"
          state={{item}}
          className="text-white- my-2 rounded-xl border-2 bg-fuchsia-700 p-2.5 hover:cursor-pointer hover:bg-fuchsia-600 hover:text-black"
        >
          Show
        </Link>
        {user &&
          (user.user_id == item.user_id || user.level_name == 'Admin') && (
            <>
              <button
                type="button"
                className="text-white- my-2 mt-6 rounded-xl border-2 bg-fuchsia-700 p-2.5 hover:cursor-pointer hover:bg-fuchsia-600 hover:text-black"
                onClick={() => {
                  console.log('Modify clicked');
                }}
              >
                Modify
              </button>
              <button
                type="button"
                className="text-white- my-2 rounded-xl border-2 bg-fuchsia-700 p-2.5 hover:cursor-pointer hover:bg-fuchsia-600 hover:text-black"
                onClick={() => {
                  console.log('Delete clicked');
                }}
              >
                Delete
              </button>
            </>
          )}
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default MediaRow;
