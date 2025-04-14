import {fetchData} from '../utils/fetchData.js';
import {useEffect, useState} from 'react';
const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const mediaData = await fetchData(
        import.meta.env.VITE_MEDIA_API + '/media',
      );
      const url = import.meta.env.VITE_AUTH_API + '/users/';

      const newData = await Promise.all(
        mediaData.map(async (item) => {
          const result = await fetchData(url + item.user_id);
          return {...item, username: result.username};
        }),
      );
      setMediaArray(newData);
    } catch (error) {
      console.error('error', error);
    }
  };
  useEffect(() => {
    getMedia();
  }, []);
  return mediaArray;
};

export default useMedia;
