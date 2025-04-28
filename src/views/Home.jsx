import {useState} from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';

import {useMedia} from '../hooks/apiHooks.js';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {mediaArray, deleteMedia, modifyMedia} = useMedia();

  return (
    <>
      <h2 className="my-4 flex flex-col items-center text-2xl font-bold">
        My Media
      </h2>
      <table className="">
        <thead>
          <tr className="*:border-1 *:border-[#ccc] *:p-4">
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Owner</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
              deleteMedia={deleteMedia}
              modifyMedia={modifyMedia}
            />
          ))}
        </tbody>
      </table>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};

export default Home;
