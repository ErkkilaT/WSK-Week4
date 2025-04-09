import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {fetchData} from '../utils/fetchData.js';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const json = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');
      setMediaArray(json);
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);
  console.log(mediaArray);

  const [selectedItem, setSelectedItem] = useState(null);
  console.log('selectedItem', selectedItem);
  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
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
            />
          ))}
        </tbody>
      </table>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};

export default Home;
