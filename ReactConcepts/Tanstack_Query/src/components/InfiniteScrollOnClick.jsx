import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

/*
Steps - 
1. Change useQuery() to useInfiniteQuery()
2. useInfiniteQuery() returns default pageParam which passed in queryFn(pageParam)
3. pass initialPageParam: 1 which sets page 1 initial page
4. setup getNextPageParam = (lastPage, allPages) => {}
5. Note: data return by useInfiniteQuery() is diff. than useQuery(), use console.log to check it
6. bind fetchNextPage method to button to fetch next data onclick event
7. You can use hasNextPage method to check if next page data exist if not then disable Load More button, Also check query refetch request in network tab
*/

/*
 getNextPageParam method - 
#It has only 1 main function to calculate next page number
# If neext page !exit then it should return undefined
# It has 2 params 1) lastPage & 2) allPages
# lastPage - it contains enitre API response of the last, most recent data fetch
# allPages - its an array of objects, each object is the entire API response of all the past fetches
# Based on API intelligence on what next page is or by manual calculation in our case(JSON sever is not flexible), the next page
needs to be calculated and returned from the getNextPageParam method
*/

const fetchFruits = ({pageParam}) => {
    return axios.get(`http://localhost:4001/fruits/?_limit=4&_page=${pageParam}`);
}
const InfiniteScrollOnClick = () => {
    const { data, isLoading, isError, error, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ["fruits"],
        queryFn: fetchFruits,
        initialPageParam: 1,
        getNextPageParam: (_lastPage, allPages) => {
            // 20 pages i.e. 5 items per page
            if(allPages.length < 5){
                return allPages.length + 1;
            }else{
                return undefined;
            }
        },
    });
    
    if(isLoading){
        return <h2>Fruit Page is loading...</h2>
    }
    if(isError){
        return <div>{error.message}</div>
    }

    return (
        <div className='container'>
            {data?.pages?.map(page =>{
                return page?.data.map(fruit => {
                    return <div className='fruit-item' key={fruit.id}>{fruit.name}</div>
                })
            })}
            <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More...</button>
        </div>
    )
}

export default InfiniteScrollOnClick