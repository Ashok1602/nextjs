import { useRouter } from "next/router";

export default function ProdDetails({ prodData }) {

  const router = useRouter();

  if (router.isFallback) {
    return <h1 style={{textAlign: 'center'}}>loading data, Pls wait...</h1>
  }

  return (
    <div style={{textAlign: 'center'}}>
      <b>{prodData.title}</b>-<b>{prodData.price}</b> <br />
      <span>{prodData.description}</span>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:4000/products');
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    // paths,
    paths: [
      {
        params: {
          prodId: `1`,
        },
      }
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `http://localhost:4000/products/${params.prodId}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true
    }
  }

  return {
    props: { prodData: data },
    revalidate: 10
  };
}
