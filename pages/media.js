import Image from "next/image";
import ImageBg from "../components/ImageBg";
import axios from "axios";

const media = ({ news }) => {
  function isEven(n) {
    return n % 2 == 0;
  }

  return (
    <>
      <ImageBg image="/media.jpg">
        <h1 className="z-20 text-5xl">Press & Media</h1>
      </ImageBg>

      <section className="bg-transparent flex flex-col justify-center items-center px-5 scroll-align-start">
        {news &&
          news.map((n, i) => {
            return (
              <div key={i} className="panel flex  items-center w-11/12 mt-5">
                <div
                  className={`flex flex-col  ${
                    isEven(i)
                      ? "lg:flex-row lg:divide-x "
                      : "lg:flex-row-reverse lg:divide-x-reverse"
                  } justify-center items-center divider divide-y lg:divide-x lg:divide-y-0`}
                >
                  <div className="w-full flex flex-col justify-center p-5">
                    {n.s3 !== "" && n.media_url === "" && (
                      <div className="flex justify-center relative h-64 w-full">
                        <Image src={n.s3} layout="fill" objectFit="cover" />
                      </div>
                    )}
                    {n.media_url && (
                      <div className="video-responsive">
                        <iframe
                          width="560"
                          height="315"
                          src={`https://www.youtube.com/embed/${n.media_url}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                  <div className="w-full p-5">
                    <h2 className="text-2xl text-center">{n.link_text}</h2>
                    <div className="p-5 flex flex-col justify-between space-y-6">
                      {n.news_body}
                    </div>
                    <div className="underline justify-end w-full flex">
                      <a href={n.url} target="_blank">
                        Read More...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(`${process.env.API_URL}/news`);

  const news = await res.data;

  return {
    props: {
      news,
    },
  };
};

export default media;
