import React, { useState } from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchFruits = (pageId) => {
    return axios.get(`http://localhost:4001/fruits/?_limit=4&_page=${pageId}`)
}
const TanstackPagination = () => {

    const [page, setPage] = useState(1);

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["fruits", page],
        queryFn: () => fetchFruits(page),
        placeholderData: keepPreviousData,
    });
    if(isLoading){
        return <div>Page is loading....</div>
    }
    if(isError){
        return <div>{error.message}</div>
    }
    return (
        <div className='container'>
            {data?.data.map(item => <div key={item.id} className='fruit-label'>{item.name}</div>)}
            <button onClick={() => setPage(prev => prev - 1)} disabled={page == 0 ? true : false}>Prev Page</button>
            <span>Current page: {page}</span>
            <button onClick={() => setPage(prev => prev + 1)} disabled={page == 5 ? true : false}>Next Page</button>
        </div>
    )
}

export default TanstackPagination