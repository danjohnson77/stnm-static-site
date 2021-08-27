import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const InstagramPanel = () => {
  const [data, setData] = useState(null);
  useEffect(async () => {
    const igRes = await axios.get(
      `https://graph.instagram.com/me/media?access_token=${process.env.IG_TOKEN}&fields=media_url,media_type,caption,permalink&limit=8`
    );

    const igData = await igRes.data;
    igData && setData(igData);
  }, []);
  return (
    <section className="bg-transparent flex flex-col justify-center items-center p-5 scroll-align-start max-w-full">
      <div className="panel w-11/12 flex flex-col items-center">
        <h1 className="lg:text-3xl text-xl mb-5">
          <i className="fab fa-instagram text-black mr-2"></i>
          @saytheirnamesmemorials
        </h1>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-rows-1 items-center gap-4">
          {data &&
            data.data.map((d, index) => {
              return (
                <div className="w-36 h-36 col-span-1 mx-auto" key={index}>
                  <a
                    href={d.permalink}
                    key={index}
                    target="_blank"
                    rel="noopener"
                    aria-label="Link to instagram post"
                    className="relative w-full h-full"
                  >
                    {d.media_type === "IMAGE" && (
                      <div className="relative w-full h-full">
                        <Image
                          src={d.media_url}
                          layout="fill"
                          objectFit="contain"
                          alt="instagram image link"
                        />
                      </div>
                    )}
                    {d.media_type === "CAROUSEL_ALBUM" && (
                      <div className="relative w-full h-full">
                        <Image
                          src={d.media_url}
                          layout="fill"
                          objectFit="contain"
                          alt="instagram image link"
                        />
                      </div>
                    )}
                    {d.media_type === "VIDEO" && (
                      <video
                        src={d.media_url}
                        className="max-h-full object-contain"
                        controls
                        alt="instagram video link"
                      />
                    )}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default InstagramPanel;
