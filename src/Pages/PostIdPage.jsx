import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostID(params.id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [params.id])
  return (
    <div>

      <h1 style={{textAlign: "center"}}>Вы открыли пост c ID {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div className='post onePost'>
          <div className='postTitle'>{post.id}. {post.title}</div>
          <div className='postBody'> {post.body}</div>
        </div>
      }
      <div style={{marginBottom:'20px'}}>Комментарии:</div>
      {isComLoading
        ? <Loader/>
        : <div className='comments__container'>{comments.map(c =>
            <div key={c.email} className='comment'>
              <h5>{c.email}</h5>
              <div>{c.body}</div>
            </div>)}
          </div>
      }
    </div>
  );
};

export default PostIdPage;
