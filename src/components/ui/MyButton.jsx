import React from 'react';

const MyButton = (props) => {
  return (
    <div>
      <button
        className="my-2.5 rounded border-1 border-fuchsia-800 p-2.5"
        type="text"
        {...props}
      />
    </div>
  );
};

export default MyButton;
