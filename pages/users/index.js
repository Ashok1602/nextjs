import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState('');


  const loadUsers = async () => {
    const res  = await fetch('/api/users');
    const data = await res.json();
    setUsers(data)
  }

  const addUser = async () => {
    const res  = await fetch('/api/users', {
        method: 'POST', 
        body: JSON.stringify({userName}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    setUsers(data)
  }

  const deleteUser = async (userId) => {
    const res = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
    })
    const data = res.json()
    if (data) {
        loadUsers()
    }
  }
  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} /> <button onClick={addUser}> add user</button> <br />
      <button style={{ marginTop: '10px'}} onClick={loadUsers}>Load data</button>
      {users ? users?.map((data,index)=> {
        return (
          <><p key={index}>{data.id}-{data.name}</p> <button onClick={() => deleteUser(data.id)}>delete</button></>
        )
      }) : "loading users..."}
    </div>
  )
}


// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   console.log(data)

//   return {
//     props: {users: data}
//   }
// }
