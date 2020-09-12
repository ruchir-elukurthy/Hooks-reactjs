import React, { useState, useEffect } from "react";
import Axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState();
  const [ifClick, setIfClick] = useState(1);

  const handleClick = () => {
    setIfClick(id);
  };

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${ifClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //we write something inside this to make sure to execute useEffect only if the parameter iniside this is being changed.
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
    </div>
  );
}

export default React.memo(DataFetching);
