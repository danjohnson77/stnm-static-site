import { useEffect, useState } from "react";

const ImageBg = ({ image, children, height = "" }) => {
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    setOpacity("opacity-1");
  }, []);
  return (
    <section
      className={`${opacity} ${height} transition-opacity duration-500 bg-transparent flex justify-center scroll-align-start bg-cover bg-center relative`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div
        className={`h-full w-full absolute inset-0 bg-black bg-opacity-50 z-0`}
      ></div>
      <div className="w-full text-center py-48 text-white z-20 flex justify-center items-center flex-col">
        {children}
      </div>
    </section>
  );
};

export default ImageBg;
