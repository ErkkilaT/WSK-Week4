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

  const postMedia = async (file, inputs, token) => {
    const data = {...inputs, ...file};
    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer: ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const mediaData = await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media',
      fetchOptions,
    );
    return mediaData;
  };

  const deleteMedia = async (token, id) => {
    const fetchOptions = {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer: ' + token,
        'Content-Type': 'application/json',
      },
    };

    const mediaData = await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media/' + id,
      fetchOptions,
    );
    return mediaData;
  };

  const modifyMedia = async (inputs, token, id) => {
    const data = {...inputs};
    const fetchOptions = {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer: ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const mediaData = await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media/' + id,
      fetchOptions,
    );
    return mediaData;
  };

  return {mediaArray, postMedia, deleteMedia, modifyMedia};
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions,
    );

    return loginResult;
  };
  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer: ' + token,
      },
    };
    const userData = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      fetchOptions,
    );

    return userData;
  };

  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/users',
      fetchOptions,
    );
  };

  return {getUserByToken, postUser};
};

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    formData.append('file', file);
    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer: ' + token,
      },
      body: formData,
    };
    const result = await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + '/upload',
      fetchOptions,
    );
    return result;
    // TODO: create FormData object
    // TODO: add file to FormData
    // TODO: upload the file to file server and get the file data (url = import.meta.env.VITE_UPLOAD_SERVER + '/upload')
    // TODO: return the file data.
  };
  return {postFile};
};

export {useMedia, useAuthentication, useUser, useFile};
