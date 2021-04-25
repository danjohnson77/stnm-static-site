import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Arrow from "./Arrow";

const Slidebox = ({ keys, data, width, height }) => {
  const [active, setActive] = useState(0);

  const handleClick = (dir) => {
    if (dir === "left") {
      active - 1 < 0 ? setActive(data.length - 1) : setActive(active - 1);
    } else if (dir === "right") {
      active + 1 > data.length - 1 ? setActive(0) : setActive(active + 1);
    }
  };

  const parseArrayToStr = (input, d) => {
    if (Array.isArray(input)) {
      let str = "";
      input.map((s) => {
        if (s.isKey) {
          str = str + d[s.key] + " ";
        } else {
          str = str + s + " ";
        }
      });
      return str;
    } else {
      return d[input];
    }
  };

  return (
    <div className="flex">
      <Arrow direction="left" onClick={() => handleClick("left")} />

      {data &&
        data.map((d, i) => {
          return (
            <Link href={`/memorial/${d.id}`}>
              <div
                className={`relative cursor-pointer ${
                  active !== i && "hidden"
                } transition-all duration-500`}
                key={i}
              >
                <Image src={d[keys.img]} width={width} height={height} />

                <div className="z-20 w-full h-full bg-black bg-opacity-40 absolute inset-0"></div>
                <div className="absolute z-30 inset-0 flex flex-col justify-center items-center w-full h-full text-white ">
                  <h3 className="text-3xl ">{d[keys.mainText]}</h3>
                  {Array.isArray(keys.subText)
                    ? keys.subText.map((s, index) => {
                        return <p key={index}>{parseArrayToStr(s, d)}</p>;
                      })
                    : d[keys.subText]}
                </div>
              </div>
            </Link>
          );
        })}

      <Arrow direction="right" onClick={() => handleClick("right")} />
    </div>
  );
};

export default Slidebox;
