import axios from "axios";
import Link from "next/link";

import ImageBg from "../components/ImageBg";
import Modal from "../components/Modal";

import SearchFilters from "../components/SearchFilters";
import DropdownPanel from "../components/DropdownPanel";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function names({ names, details, context }) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  useEffect(() => {
    ScrollTrigger.batch(".name-entry", {
      onEnter: (elements, triggers) => {
        gsap.to(elements, {
          opacity: 1,

          duration: 0.6,
          stagger: 0.3,
          ease: "power1.out",
        });
      },
    });
  }, []);
  return (
    <>
      <Modal>
        <div className="text-center">
          <p>
            This database has been compiled to highlight the gravity of systemic
            racism on the Black community. It is not meant to be exclusionary,
            however names included must represent Black lives.
          </p>
          <p>
            Our goal is to fact check every story and provide accurate images,
            names and information. However we rely on submissions, as well as
            photos and information available publicly on the internet. If you
            see errors or discrepancies on this website, or would like your
            loved one removed from our memorial please notify us at{" "}
            <Link href="mailto:info@saytheirnamesmemorials.com">
              <a className="underline">info@saytheirnamesmemorials.com</a>
            </Link>
          </p>

          <p>
            Local memorials nationwide assume all liability for the photos and
            information in their memorials.
          </p>
        </div>
      </Modal>
      <ImageBg image="/info.jpg" height="h-full">
        <div className="w-8/12 text-lg lg:text-2xl text-center">
          <p className="mb-5">
            This database has been compiled to highlight the gravity of systemic
            racism on the Black community. It is not meant to be exclusionary,
            however, names included must represent this cause. In addition to
            submitting a loved one’s name, feel free to message us with any
            updates, news stories, media links, or donation sites. We are
            constantly updating biographical information so our database
            represents the both most current information and honors the wishes
            of family members.
          </p>
          <p>
            The Say Their Names team sends our deepest condolences for the loss
            of your loved one and the impact this has made on our collective
            community. Our hearts are with you.
          </p>

          <a href="mailto:submissions@saytheirnamesmemorials.com?subject=Name Submission">
            <button className="btn my-5">Submit Now</button>
          </a>
        </div>
      </ImageBg>
      <section className="text-black flex flex-col justify-center items-center mx-auto py-12">
        <DropdownPanel
          classes="lg:w-11/12 w-full panel mx-auto my-5 border"
          heading="Search Filters:"
          startOpen={Object.keys(context).length > 0}
        >
          <SearchFilters context={context} details={details} />
        </DropdownPanel>
      </section>
      <section>
        <div className="grid names-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-transparent w-full justify-start items-center p-5 gap-4 rounded-lg">
          {names && names.length > 0 ? (
            names.map((n, index) => {
              const { name, birth_year, incident_year, id, s3 } = n;
              return (
                <Link href={`/name/${id}`} key={index}>
                  <div className="name-entry flex flex-col justify-start items-center cursor-pointer z-0 p-5 transform hover:scale-105 opacity-0 transition-all min-h-full">
                    <img
                      src={s3}
                      alt={name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    <div className="mt-2 text-xl text-center">
                      <p>{name}</p>
                      <div className="text-gray-500 text-lg">
                        <p>
                          {`${birth_year && birth_year + " - "}`}
                          {incident_year && incident_year}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="w-full flex justify-center">
              <h1 className="text-4xl text-center">No results found</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;
  const detailsStr = Array.isArray(query.details)
    ? query.details.join(",")
    : query.details;

  const rangeStr = `${query.incident_start && query.incident_start},${
    query.incident_end && query.incident_end
  }`;

  // const multiStr = `${query.gender && query.gender},${
  //   query.lgbtq && query.lgbtq
  // },${query.cis_trans && query.cis_trans}`;

  // const multiCatStr = `${query.gender && "gender"},${
  //   query.lgbtq && "lgbtq"
  // },${query.cis_trans && "cis_trans"}`;

  // const multiJoined =
  //   `${multiStr !== "" && "&matchMulti=" + multiStr}` +
  //   `${multiCatStr !== "" && "&matchMultiCategories=" + multiCatStr}`;

  const res = await axios.get(
    `${process.env.API_URL}/lives?sort=name${
      query.name ? "&match=" + query.name + "&matchCategory=name" : ""
    }${query.details ? "&tags=" + detailsStr : ""}${
      query.incident_start || query.incident_end
        ? "&rangeCategory=incident_year&range=" + rangeStr
        : ""
    }${
      query.lat && query.lng && query.locationRange && query.location
        ? "&locationRange=" +
          query.locationRange +
          "&lat=" +
          query.lat +
          "&lng=" +
          query.lng +
          "&location=" +
          query.location
        : ""
    }`
  );

  const names = await res.data;

  const detailsRes = await axios.get(
    `${process.env.API_URL}/lives/data/incident_details`
  );

  const details = await detailsRes.data;

  return {
    props: {
      names,
      details: details.data,
      context: query,
    },
  };
};
