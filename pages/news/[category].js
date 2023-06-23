export default function NewsDetails({ newsData, category }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <b>Showing Results : {category}</b>
      {newsData.map((data) => {
        return (
          <div key={data.id}  style={{ marginTop: '10px' }}>
            <span>{data.id}</span>-<span>{data.title}</span> 
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    `http://localhost:4000/news?category=${params.category}`
  );
  const data = await res.json();

  return {
    props: { newsData: data, category: params.category },
  };
}
