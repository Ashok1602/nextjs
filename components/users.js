
export default function page({users}) {
  console.log(users, "hi")
  return (
    <div>
      {users ? users.map((data,index)=> {
        return (
          <p key={index}>{data.name}</p>
        )
      }) : "loading users..."}
    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data)
}
