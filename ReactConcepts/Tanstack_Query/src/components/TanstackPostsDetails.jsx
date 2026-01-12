import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const fetchPostsDetails = (postId) => {
    return axios.get(`http://localhost:4001/posts/${postId}`)
}

const TanstackPostsDetails = () => {

    const { postId } = useParams();
    console.log("postId", postId);

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["posts", postId],
        queryFn: () => fetchPostsDetails(postId),
    });

    if(isLoading){
        return <div>Page is loading....</div>
    }
    if(isError){
        return <div>{error.message}</div>
    }

    const {title, body} = data?.data || {};

  return (
    <div className='post-details-container'>
        <div className='post-details-title'>{title}</div>
        <div className='post-details-body'>{body}</div>
    </div>
  )
}

export default TanstackPostsDetails