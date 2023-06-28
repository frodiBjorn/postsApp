import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";


const PostItem = (props) => {
  const navigate  = useNavigate()
  return (
    <div className="post">
      <div className="post__content">
        <h2>{props.number}. {props.post.title}</h2>
        <p>{props.post.body}</p>
      </div>
      <div className="post__btns">
        <MyButton style="open" onClick={() => {navigate(`/posts/${props.post.id}`)}}>Открыть</MyButton>
        <MyButton style="delete" onClick={() => {props.remove(props.post)}}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
