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
    gsap.from(".memorial-left-in", {
      scrollTrigger: ".create-memorial",
      x: 50,
      duration: 1,
    });
    gsap.from(".memorial-right-in", {
      scrollTrigger: ".create-memorial",
      x: -50,
      duration: 1,
    });
  }, []);
  return (
    <section className="bg-transparent flex flex-col justify-center items-center p-5 mb-5 lg:mb-0">
      <div className="text-center w-11/12 flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0 divide-black items-stretch lg:py-24">
        <div
          className={`${
            memorials ? "lg:w-6/12" : "w-11/12"
          }  min-h-full flex flex-col justify-between lg:px-10 memorial-left-in create-memorial max-w-xl mx-auto`}
        >
          <h1 className="text-3xl my-5">Create a Community Memorial</h1>
          <p>
            The Say Their Names Memorial team provides a database of names,
            photos, and information to individuals who desire to put up
            memorials in their community. We have two mobile installations
            available for rent, depending on location: the Hall of Injustice
            structure —or— up to fifty free-standing pillars on which to display
            images and flowers. Our goal is to foster community engagement by
            creating memorials for and by your community. Submit a request below
            and we will coordinate. All local organizers must agree to complete
            liability and take responsibility to enforce safety regulations. For
            information on past and upcoming memorials, please visit the{" "}
            <Link href="/memorials">
              <a className="underline">Memorials Page.</a>
            </Link>{" "}
            Please note, our team is 100% volunteer-based. Please allow 2-3
            business days for response.
          </p>
          <Link href="mailto:info@saytheirnamesmemorials.com?subject=I want to make a local Memorial">
            <button className="btn my-5 lg:mt-5">Request Info</button>
          </Link>
        </div>
        {memorials && (
          <div className="lg:w-6/12 flex flex-col lg:justify-between lg:px-10 memorial-right-in create-memorial">
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
        )}
      </div>
    </section>
  );
};

export default SubmitMemorial;
