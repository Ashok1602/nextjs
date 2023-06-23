//ISR: INCREMENTAL STATIC REGENERATION
//EX: getStaticPropd, with 'revalidate'

export default function products({prods}) {
    return (
      <div>
        {prods ? prods.map((data,index)=> {
          return (
            <div key={index}>
              {/* <Link href={`products/${data.id}`}> */}
                <b>{data.title}</b>-<b>{data.price}</b> <br />
                <span>{data.description}</span> 
              {/* </Link> */}
                <hr />
            </div>
            )
        }) : "loading products..."}
      </div>
    )
  }
  
  
  export async function getStaticProps() {
    console.log("generating / regenerating");
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();

    return {
      props: {prods: data.slice(0, 3)},
      revalidate: 10
    }
  }
  