import axios from "axios";
import Link from "next/link";
import Image from "next/image";

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
    <section className="text-white flex flex-col justify-center items-center w-10/12 mx-auto">
      <div className="panel w-full mx-auto mb-5 text-center flex flex-col">
        <p>
          {" "}
          The following list is not exhaustive or complete. Please email us to
          submit names, stories, news articles & photos.
        </p>
        <a href="mailto:submissions@saytheirnamesmemorials.com?subject=Name Submission">
          <button className="btn my-5">Submit Now</button>
        </a>
      </div>
      <DropdownPanel classes="w-full panel mx-auto" heading="Disclaimer:">
        <p>
          This database has been compiled to highlight the gravity of systemic
          racism on the Black community. It is not meant to be exclusionary,
          however names included must represent Black lives.
        </p>
        <p>
          Our goal is to fact check every story and provide accurate images,
          names and information. However we rely on submissions, as well as
          photos and information available publicly on the internet. If you see
          errors or discrepancies on this website, or would like your loved one
          removed from our memorial please notify us at{" "}
          <Link href="mailto:info@saytheirnamesmemorials.com">
            info@saytheirnamesmemorials.com
          </Link>
        </p>

        <p>
          Local memorials nationwide assume all liability for the photos and
          information in their memorials.
        </p>
      </DropdownPanel>
      <DropdownPanel
        classes="w-full panel mx-auto my-5"
        heading="Search Filters:"
        startOpen={Object.keys(context).length > 0}
      >
        <SearchFilters context={context} details={details} />
      </DropdownPanel>
      <div className="grid names-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-black w-full justify-center items-center p-5 gap-5 rounded-lg bg-opacity-50">
        {names && names.length > 0 ? (
          names.map((n, index) => {
            const { name, birth_year, incident_year, id, s3 } = n;
            return (
              <Link href={`/name/${id}`} key={index}>
                <div className="name-entry flex flex-col justify-start items-center cursor-pointer z-0 p-5 transform hover:scale-105 opacity-0 transition-all min-h-full">
                  <Image src={s3} alt="" width="200" height="300" />
                  <p className="text-xl mt-5 text-center">{name}</p>
                  <p>{`${birth_year && "b. " + birth_year}`}</p>{" "}
                  <p> {incident_year && "d. " + incident_year}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <h1>No results found</h1>
        )}
      </div>
    </section>
  );
}

export const getServerSideProps = async (context) => {
  const detailsStr = Array.isArray(context.query.details)
    ? context.query.details.join(",")
    : context.query.details;

  const rangeStr = `${
    context.query.incident_start && context.query.incident_start
  },${context.query.incident_end && context.query.incident_end}`;

  // const multiStr = `${context.query.gender && context.query.gender},${
  //   context.query.lgbtq && context.query.lgbtq
  // },${context.query.cis_trans && context.query.cis_trans}`;

  // const multiCatStr = `${context.query.gender && "gender"},${
  //   context.query.lgbtq && "lgbtq"
  // },${context.query.cis_trans && "cis_trans"}`;

  // const multiJoined =
  //   `${multiStr !== "" && "&matchMulti=" + multiStr}` +
  //   `${multiCatStr !== "" && "&matchMultiCategories=" + multiCatStr}`;

  const res = await axios.get(
    `http://localhost:5000/lives?sort=name${
      context.query.name
        ? "&match=" + context.query.name + "&matchCategory=name"
        : ""
    }${context.query.details ? "&tags=" + detailsStr : ""}${
      context.query.incident_start || context.query.incident_end
        ? "&rangeCategory=incident_year&range=" + rangeStr
        : ""
    }${
      context.query.lat &&
      context.query.lng &&
      context.query.locationRange &&
      context.query.location
        ? "&locationRange=" +
          context.query.locationRange +
          "&lat=" +
          context.query.lat +
          "&lng=" +
          context.query.lng +
          "&location=" +
          context.query.location
        : ""
    }`
  );

  const names = await res.data;

  const detailsRes = await axios.get(
    `http://localhost:5000/lives/data/incident_details`
  );

  const details = await detailsRes.data;

  return {
    props: {
      names,
      details: details.data,
      context: context.query,
    },
  };
};
