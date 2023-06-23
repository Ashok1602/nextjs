import { useRouter } from "next/router";

export default function PostDetails({ postData }) {

  const router = useRouter();

  if (router.isFallback) {
    return <h1 style={{textAlign: 'center'}}>loading data, Pls wait...</h1>
  }

  return (
    <div style={{textAlign: 'center'}}>
      <b>{postData.title}</b> <br />
      <span>{postData.body}</span>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
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
          postId: `1`,
        },
      },
      {
        params: {
          postId: `2`,
        },
      },
      {
        params: {
          postId: `3`,
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true
    }
  }

  return {
    props: { postData: data },
  };
}
