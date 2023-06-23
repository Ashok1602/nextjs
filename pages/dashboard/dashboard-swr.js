//CLIENT SIDE DATA FETCHING WIRH SWR (STALE-WHILE-REVALIDATE)


import React from 'react'
import useSWR from "swr"

const dataFetcher = async () => {
    const data = await fetch('http://localhost:4000/dashboard');
    const res = await data.json()
    return res;
  }

export default function DashboardSWR() {

  const {data, error } = useSWR('dashboard', dataFetcher)

  if (!data) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>An Error has occurred</h1>;
  }
  return (
    <div>
        <b>posts : {data?.posts}</b> <br />
        <b>likes: {data?.likes}</b> <br />
        <b>comments: {data?.comments}</b> <br />
    </div>
  )
}
