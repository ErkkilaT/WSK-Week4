import {useState} from 'react';
import useForm from '../hooks/formHooks.js';
import {useFile, useMedia} from '../hooks/apiHooks.js';
import {useNavigate} from 'react-router';
import TextInput from '../components/ui/TextInput.jsx';
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
      <h1 className="my-4 flex flex-col items-center text-3xl font-bold">
        Upload
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <TextInput
          label="Title"
          name="title"
          type="text"
          id="title"
          onChange={handleInputChange}
        />

        <div className="flex w-4/5 flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
            className="my-2.5 rounded border-1 border-fuchsia-800 p-2.5"
          ></textarea>
        </div>
        <div className="flex w-4/5 flex-col">
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
            className="my-2.5 rounded border-1 border-fuchsia-800 p-2.5"
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
          className="text-white- my-2 rounded-xl border-2 bg-fuchsia-700 p-2.5 hover:cursor-pointer hover:bg-fuchsia-600 hover:text-black"
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
