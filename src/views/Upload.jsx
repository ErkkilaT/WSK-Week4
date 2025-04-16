import {useState} from 'react';
import useForm from '../hooks/formHooks.js';
import {useFile, useMedia} from '../hooks/apiHooks.js';
import {useNavigate} from 'react-router';
const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      setFile(evt.target.files[0]);
    }
  };
  const {postFile} = useFile();
  const {postMedia} = useMedia();
  const navigate = useNavigate();
  const doUpload = async () => {
    try {
      const token = window.localStorage.getItem('token');
      const fileResult = await postFile(file, token);
      console.log('fileResult', fileResult);
      const mediaResult = await postMedia(fileResult.data, inputs, token);
      console.log('mediaResult', mediaResult);
      navigate('/');

      // TODO: call postFile function (see below)
      // TODO: call postMedia function (see below)
      // TODO: redirect to Home
    } catch (e) {
      console.log(e.message);
    }
  };
  const {inputs, handleInputChange, handleSubmit} = useForm(doUpload, null);
  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file ? URL.createObjectURL(file) : 'https://placehold.co/600x400'
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
