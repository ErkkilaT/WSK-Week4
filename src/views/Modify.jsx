//import {useState} from 'react';
import useForm from '../hooks/formHooks.js';
import {useMedia} from '../hooks/apiHooks.js';
import TextInput from '../components/ui/TextInput.jsx';
import {Link, useLocation, useNavigate} from 'react-router';
const Modify = () => {
  const {state} = useLocation();
  const item = state.item;
  const {modifyMedia} = useMedia();
  const navigate = useNavigate();
  console.log(item);

  const doModify = async () => {
    try {
      const token = window.localStorage.getItem('token');
      console.log('inputs', inputs);
      console.log('token', token);
      console.log('id', item.media_id);
      const mediaResult = await modifyMedia(inputs, token, item.media_id);
      console.log('modifyResult', mediaResult);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };
  const {inputs, handleInputChange, handleSubmit} = useForm(doModify, null);
  return (
    <>
      <h1 className="my-4 flex flex-col items-center text-3xl font-bold">
        Modify
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

        <button
          type="submit"
          //disabled={inputs.title?.length > 3 ? false : true}
          className="text-white- my-2 rounded-xl border-2 bg-fuchsia-700 p-2.5 hover:cursor-pointer hover:bg-fuchsia-600 hover:text-black"
        >
          Modify
        </button>
      </form>
    </>
  );
};

export default Modify;
