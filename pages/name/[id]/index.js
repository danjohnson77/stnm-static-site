import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const name = ({ entry }) => {
  const [bio, setBio] = useState("");
  const [opacity, setOpacity] = useState("opacity-0");

  const {
    biography,
    s3,
    name,

    birth_date_display,
    birthplace,

    incident_location,
    incident_date_display,
    donate_link,
    media,
  } = entry;

  useEffect(() => {
    const decodeHTML = function (html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    };
    const html = decodeHTML(biography);

    setBio(html);
    setOpacity("opacity-100");
  }, []);

  return (
    <section
      className={`${opacity} transition-opacity duration-1000 lg:py-24 lg:grid lg:grid-cols-2 lg:gap-4 min-h-screen`}
    >
      <div className="flex flex-col items-center ">
        <div className="my-5 lg:my-0 min-w-full min-h-full">
          <div className="flex h-full content-center items-center flex-col p-5">
            {s3 && (
              <Image
                src={s3}
                alt={name}
                width="450"
                height="450"
                className="object-contain w-8/12"
              />
            )}

            <h1 className="text-4xl mt-5 text-center">{name}</h1>
            <p className="text-lg">
              {birth_date_display !== "" && birth_date_display} -{" "}
              {incident_date_display !== "" && incident_date_display}
            </p>
            {birthplace && <p>Birthplace: {birthplace}</p>}
            {incident_location && (
              <p>Location of Incident: {incident_location}</p>
            )}
            {donate_link !== "" && (
              <button className="btn my-5">Support {`${name}`}</button>
            )}
          </div>
        </div>
        {media && media.length > 0 && (
          <div className="my-5 min-w-full">
            <h1 className="text-2xl text-center">News and Links for {name}</h1>
            <ul className="my-5 px-5 ">
              {media.map((m, i) => {
                return (
                  <li key={i}>
                    <Link href={m.website}>{m.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center ">
        <div
          className={`panel min-w-full min-h-full flex ${
            !biography && "justify-center"
          } flex-col`}
        >
          <div className="min-w-full ">
            {biography ? (
              <>
                <h1 className="text-2xl mb-5 text-center lg:text-left">{`${name}'s Story:`}</h1>
                <div
                  className="flex flex-col justify-between space-y-6"
                  dangerouslySetInnerHTML={{ __html: bio }}
                ></div>{" "}
              </>
            ) : (
              <div className="flex flex-col justify-between space-y-6 items-center text-center">
                <p>
                  We have not yet added biographical information for {name}.
                </p>
              </div>
            )}
            <div className="flex flex-col items-center">
              <p>
                Do you have information you would like to share about {name}?
              </p>
              <Link
                href={`mailto:submissions@saytheirnamesmemorials.com?subject=STNM Website Inquiry: ${name}`}
                className="underline"
              >
                <button className="btn my-5">Let Us Know</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async (context) => {
  const res = await axios.get(
    `${process.env.API_URL}/lives/${context.params.id}`
  );

  const entry = await res.data;

  return {
    props: {
      entry: entry.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(`${process.env.API_URL}/lives?sort=name`);

  const entries = await res.data;

  const ids = entries.map((entry) => {
    return entry.id;
  });

  const paths = ids.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default name;
