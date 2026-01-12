import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer";
/*
For infinite scroll, we have to use intesection viewer and bind that interection viewer to a div when that div comes into the viewport then
automatically refetch query requests generate and returns data contibuously on scroll
1. use 3rd party lib. https://www.npmjs.com/package/react-intersection-observer
2. invoke it and set bind ref and use useEffect for fetching next pages, inView as its sets to true or false based on ref binded div is in viewport or not
3. You can also is isFetchingNextPage to add Loading message for user persepective
*/

const fetchFruits = ({pageParam}) => {
    return axios.get(`http://localhost:4001/fruits/?_limit=10&_page=${pageParam}`);
}
const InfiniteScroll = () => {

    const { data, isLoading, isError, error, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["fruits"],
        queryFn: fetchFruits,
        initialPageParam: 1,
        getNextPageParam: (_lastPage, allPages) => {
            // 20 pages i.e. 5 items per page
            if (allPages.length < 5) {
                return allPages.length + 1;
            } else {
                return undefined;
            }
        },
    });

    const {ref, inView} = useInView();

    useEffect(()=>{
        if(inView){
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);

    if (isLoading) {
        return <h2>Fruit Page is loading...</h2>
    }
    if (isError) {
        return <div>{error.message}</div>
    }

    return (
        <div className='container'>
            {data?.pages?.map(page => {
                return page?.data.map(fruit => {
                    return <div className='fruit-item' key={fruit.id}>{fruit.name}</div>
                })
            })}
            <div ref={ref}>{isFetchingNextPage && 'Loading...'}</div>
        </div>
    )
}

export default InfiniteScroll