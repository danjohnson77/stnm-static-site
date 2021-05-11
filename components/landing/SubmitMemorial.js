import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SubmitMemorial = ({ memorials }) => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  useEffect(() => {
    gsap.from(".fade-in", {
      scrollTrigger: ".fade-in",
      opacity: 0,
      duration: 1,
    });
    gsap.from(".left-in", {
      scrollTrigger: ".left-in",
      x: 50,
      duration: 1,
    });
    gsap.from(".right-in", {
      scrollTrigger: ".right-in",
      x: -50,
      duration: 1,
    });
  }, []);
  return (
    <section className="bg-transparent flex flex-col justify-center items-center p-5 scroll-align-start">
      <div className="text-center w-11/12 flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0 divide-black items-stretch lg:py-24">
        <div
          className={`${
            memorials ? "lg:w-6/12" : "w-11/12"
          }  min-h-full flex flex-col justify-between lg:px-10`}
        >
          <h1 className="text-3xl my-5">
            Create a memorial in your community.
          </h1>
          <p>
            We provide a database of names, photos and information to
            communities wanting to put up temporary memorials on fences, windows
            and walls in their own neighborhoods. Our goal is to get a memorial
            in every community across the country; a memorial created for and by
            your community. Contact us for free access to the files. All local
            organizers must agree to complete liability responsibility &
            enforcement of Covid-19 restrictions. For information on our
            traveling memorials, please visit the Tour page. Please note, at
            this time we are operated 100% by volunteers. Please allow 2-3
            business days for response.
          </p>
          <Link href="mailto:info@saytheirnamesmemorials.com?subject=I want to make a local Memorial">
            <button className="btn">Request Info</button>
          </Link>
        </div>
        {memorials && (
          <>
            <div className="lg:w-6/12 flex flex-col lg:justify-between lg:px-10">
              <h1 className="text-3xl my-5">Upcoming Memorials</h1>
              <div className="flex flex-col items-center justify-center h-full">
                {memorials.map((m, i) => {
                  const {
                    s3,
                    name,
                    location,
                    start_date_display,
                    end_date_display,
                    id,
                  } = m;
                  return (
                    <Link href={`/memorial/${id}`} key={i}>
                      <div
                        className="flex w-full flex-col  lg:flex-row cursor-pointer justify-center align-center items-center transform hover:bg-black hover:text-white
                      hover:bg-opacity-50 transition-colors duration-300 p-5 rounded-md"
                      >
                        <div className="py-5">
                          <Image src={s3} width="75" height="75" alt={name} />
                        </div>
                        <div className="flex flex-col pb-5 w-full">
                          <h2 className="text-2xl">{name}</h2>
                          <p>{location}</p>
                          <p>
                            {start_date_display} - {end_date_display}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link href="/memorials">
                <button className="btn divide-y-0 divide-opacity-0 mt-5">
                  See All Memorials
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SubmitMemorial;
