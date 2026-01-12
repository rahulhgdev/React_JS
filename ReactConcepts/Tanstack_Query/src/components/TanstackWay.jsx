import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const TanstackWay = () => {

    /* useQuery() accepts 2 thigs as obj. 
        1st. queryKey it stores query here., "posts"|
        You can pass multiple ex., if query is /posts/1/books then queryKey: ["/posts", post.id, "books"]
        2nd. queryFn() its a callback funtion which always returns a promise
    */

    /*
        Query cache - 
        # Bydefault React-Query stores query results for 5 minutes.
        # Initially when useQuery() is fired then react-query will check if query with given
        query key and query function exists if yes, then it'll serve the stored data that's why we don't see the loading message in subsequent request.
        # However, React query knows server data might has updated and cache dosn't have latest data so a background refetch is triggered for same query and
        if fetch is successfull then it'll update new data in UI
        # To check above - console.log(isLoading, isFetching); both will initially give (false, false) and then update 1 data in db.json and refresh page - 
        You'll see old cache data for few seconds and then new data updated in UI and consle value now (false, true);
    */

     /*
     staleTime - 
     # By default React-Query always assume data is old so if you navigate page and return React-Query data pull page, you'll see each time another 
     fetch request is made see reactdevtool it'll show Stale. 
     # To restrict react-query to make fetch request each time we can pass staleTime (in milliseconds),you can see reactdevtool it'll show Fresh till staleTime
     # Note: As giving staleTime for that given time old cache request is loading so if you update any changes in db.json still old data will show until staleTime expires
    */ 
    
    /*
     Polling (refetchInterval & refetchIntervalInBackground) - To pull data in regular interval time ex., Stock charts
     # Bydefault its set to false but you can set numbers in milliseconds. After setting you'll see query requests is pulling continuously in given interval of time
     # In reactdevtool now status will show as Fetching and stale
     # If you switch tabs you'll see query requests has stopped as refetchInterval works on focus tabs only. And if your application wants to fetch data in background too 
     # like while switching tabs, To fix this use refetchIntervalInBackground: true
    */

     /*
     Note: React-Query refetch data when we're focused on query page tab or in diff. tab(refetchIntervalInBackground) or simply its automatic refetching when the query mounts
     # To disbale this use - enabled: false
     # It's usefull when you want to fetch query on certain event like click on button, etc.
     # React-query provides 'refetch' method to fetch data on click
     */
    
    const {data, isLoading, isFetching, isError, error, refetch} =  useQuery({
        queryKey: ["posts"],
        queryFn: () => {
            return axios.get("http://localhost:4001/posts");
        },
        // staleTime: 30000,
        // refetchInterval: 1000
        // refetchIntervalInBackground: true,
        enabled: false,
     })

    if (isLoading) {
        return <div>Page is loading...</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }

    // console.log(data);
    console.log(isLoading, isFetching);
    //  data?.data = The ?. is the optional chaining operator, which ensures that if data is null or undefined, it doesn't throw an error and just returns undefined. So, if data is valid, it accesses data.data. 
    return (
        <div className='post-list'>
            <button onClick={refetch}>Fetch Data</button>
            {data?.data.map(post => (
                <Link to={`/rq-posts/${post.id}`}>
                    <div className='post-item' key={post.id}>
                        <h3 className='post-title'>{post.title}</h3>
                        <p className='post-body'>{post.body}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default TanstackWay