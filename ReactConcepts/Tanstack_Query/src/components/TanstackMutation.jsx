import { QueryCache, useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

/*
#1 To post data i.e. mutate data ex., here we're adding new data in db.json file using following steps
1. use -> useMutate({}) & pass mutationFn() as obj. which should returns promise and pass post as payload in promise fn
2. useMutate() returns mutate() , use this mutate() in your data post logic
3. Unlike useQuery() this also returns {data, isLoading, isError error}
4. Voila!!

#2. Now after adding new data we've to manuaally click button to fetch new data and then it reflects in UI, to avoid this -
1. import useQueryClient which we've created in when we wrapped App.jsx and now invoke it and use created queryClient
2. Note(logic): After data is posted we tell React-query to re-invalidate query cache so it'll fetc new data from database and reflect on UI for that -
- use onSuccess() in useMutation() and invalidate query-cache using queryClient
- pass queryKey in queryClient.invalidateQueries()
3. Voila!!

#3. Now when new data is adding 2 requests are genertaing GET & POST but GET request returns all data even though POST returns new data, so to avoid making new api request for GET - 
1. Note(logic): After adding new data, we receive newly added data and that new data we can pass in internal list cache of POST, so React-Query doesn't make new api rquest for GET request
2. we'll use setQueryData() fn to override existing query cache and return the data we want, Note: pass queryKey as it ex. here ["posts"] in setQueryData()
3. 2nd param in setQueryData([queryKey], (oldQueryData)=>{}) will be callback fn to return the updated data
3. Voila!!
*/

// GET data
const fetchPosts = () => {
    return axios.get('http://localhost:4001/posts/');
}

// Post data
const addPost = (post) => {
    return axios.post('http://localhost:4001/posts/', post);
}

const TanstackMutation = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    //#2
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });

    //#1 Post 
    const {mutate} = useMutation({
        mutationFn: addPost,
        onSuccess:(newData) =>{
            // queryClient.invalidateQueries("posts");
            
            //#3
            // re-write the existing query-cache and return new data
            queryClient.setQueryData(["posts"], (oldQueryData) =>{
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, newData.data]
                }
            })
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedid = Date.now();
        const post = {id:updatedid, title, body};
        mutate(post);
        setTitle("");
        setBody("");
    }

    if (isLoading) {
        return <h2>Posts are fetching...</h2>
    }
    if (isError) {
        return <div>{error.message}</div>
    }

    return (
        <div className='post-list'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter Title' />
                <input
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder='Enter Title' />
                <button type='submit'>Post</button>
            </form>
            {data?.data.map(post => (
                <Link to={`/rq-posts/${post.id}`} key={post.id}>
                    <div className='post-item' key={post.id}>
                        <h3 className='post-title'>{post.title}</h3>
                        <p className='post-body'>{post.body}</p>
                    </div>
                </Link>
            ))}
            <button onClick={refetch}>Fetch Data</button>
        </div>
    )
}

export default TanstackMutation