
//SERVER SIDE RENDERING
//EX: getServerSideRendering

export default function news({news}) {
    return (
      <div>
        {news ? news.map((data,index)=> {
          return (
            <div key={index}>
              {/* <Link href={`products/${data.id}`}> */}
                <b>{data.title}</b>-<b>{data.category}</b> <br />
              {/* </Link> */}
                <hr />
            </div>
            )
        }) : "loading news..."}
      </div>
    )
  }
  
  
  export async function getServerSideProps() {
    const res = await fetch('http://localhost:4000/news');
    const data = await res.json();

    return {
      props: {news: data},
    }
  }
  