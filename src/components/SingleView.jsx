const SingleView = (props) => {
  const {item, setSelectedItem} = props;
  const handleClick = () => {
    setSelectedItem(null);
  };
  return (
    <>
      {item && (
        <dialog open>
          <button onClick={handleClick}>&#10005;</button>
          <h3>Title: {item.title}</h3>
          <p>{item.description}</p>
          {item.media_type.includes('video/') ? (
            <video src={item.filename} controls />
          ) : (
            <img src={item.filename} alt={item.title} />
          )}
        </dialog>
      )}
    </>
  );
};
export default SingleView;
