const News = () => {
  return (
    <section className="h-screen bg-darkBrown text-white flex flex-col p-5 justify-center">
      <h1 className="text-5xl">Latest News</h1>
      <div className="flex flex-col justify-center min-h-max divide-2">
        <div className="flex p-5 justify-center mb-10">
          <img src="https://via.placeholder.com/300" alt="" />
          <div className="flex flex-col justify-evenly p-5">
            <h3 className="text-4xl">This is a test headline</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              eligendi libero quasi ducimus maxime laboriosam ullam officia
              obcaecati quisquam repellat.
            </p>
          </div>
        </div>
        <ul className="flex flex-col flex-wrap text-center">
          <li className="news-item">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </li>
          <li className="news-item">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </li>
          <li className="news-item">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </li>
          <li className="news-item">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </li>
          <li className="news-item">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </li>
          <li className="news-item">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default News;
