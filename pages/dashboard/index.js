//CLIENT SIDE DATA FETCHING
//SAME LIKE FETCHING DATA IN REACT COMPONENT


import React, {useState, useEffect} from 'react'

export default function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      const data = await fetch('http://localhost:4000/dashboard');
      const res = await data.json()
      setData(res);
      if (res) {
        setLoading(false)
      }
    }
    fetchDashboardData()
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
        <b>posts : {data?.posts}</b> <br />
        <b>likes: {data?.likes}</b> <br />
        <b>comments: {data?.comments}</b> <br />
    </div>
  )
}
