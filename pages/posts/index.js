//STATIC GENERATION 
//getStaticProps

import Link from "next/link";

export default function posts({posts}) {
    return (
      <div>
        {posts ? posts.map((data,index)=> {
          return (
            <div key={index}>
              <Link href={`posts/${data.id}`}>
                <b>{data.title}</b> <br />
                <span>{data.body}</span> 
              </Link>
                <hr />
            </div>
            )
        }) : "loading posts..."}
      </div>
    )
  }
  
  
  export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
      props: {posts: data.slice(0, 3)}
    }
  }
  