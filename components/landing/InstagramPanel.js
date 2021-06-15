const InstagramPanel = ({ igData = [] }) => {
  return (
    <section className="bg-transparent flex flex-col justify-center items-center p-5 scroll-align-start max-w-full">
      <div className="panel w-11/12 flex flex-col items-center">
        <h1 className="lg:text-3xl text-xl mb-5">
          <i className="fab fa-instagram text-black mr-2"></i>
          @saytheirnamesmemorials
        </h1>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-rows-1 items-center gap-4">
          {igData.data.map((d, index) => {
            return (
              <a href={d.permalink} key={index} target="_blank">
                <div className="w-36 col-span-1 mx-auto">
                  {d.media_type === "IMAGE" && (
                    <img
                      src={d.media_url}
                      className="max-h-full object-contain"
                    />
                  )}
                  {d.media_type === "CAROUSEL_ALBUM" && (
                    <img
                      src={d.media_url}
                      className="max-h-full object-contain"
                    />
                  )}
                  {d.media_type === "VIDEO" && (
                    <video
                      src={d.media_url}
                      className="max-h-full object-contain"
                      controls
                    />
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InstagramPanel;
