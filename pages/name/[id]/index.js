import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const name = ({ entry }) => {
  const [bio, setBio] = useState("");

  const {
    biography,
    s3,
    name,
    birth_month,
    birth_day,
    birth_year,
    birthplace,
    incident_month,
    incident_day,
    incident_year,
    incident_location,
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
  }, []);

  return (
    <>
      <div className="bg-image">
        <div className="bg-overlay"></div>
        <Image src="/name.jpg" layout="fill" objectFit="cover" />
      </div>
      <section className="px-5 lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="flex flex-col justify-center">
          <div className="panel my-5 lg:my-0 min-w-full">
            <div className="flex justify-start content-center items-center flex-col p-5">
              {s3 && (
                <Image
                  src={s3}
                  alt=""
                  width="350"
                  height="350"
                  className="object-contain w-8/12"
                />
              )}

              <h1 className="text-4xl mt-5">{name}</h1>
              <p className="text-lg">
                {birth_month === "" ||
                  birth_day === "" ||
                  birth_year === "" ||
                  `b.`}{" "}
                {birth_month !== "" && birth_month + "-"}
                {birth_day !== "" && birth_day + "-"}
                {birth_year !== "" && birth_year}
                {birthplace !== "" && ` - ${birthplace}`}
              </p>
              <p className="text-lg">
                {incident_month === "" ||
                  incident_day === "" ||
                  incident_year === "" ||
                  `d.`}{" "}
                {incident_month !== "" && incident_month + "-"}
                {incident_day !== "" && incident_day + "-"}
                {incident_year !== "" && incident_year}
                {incident_location !== "" && ` - ${incident_location}`}
              </p>
              {donate_link !== "" && (
                <button className="btn my-5">Support {`${name}`}</button>
              )}
            </div>
          </div>
          {media && media.length > 0 && (
            <div className="panel my-5 min-w-full">
              <h1 className="text-2xl text-center">
                News and Links for {name}
              </h1>
              <ul className="my-5 px-5 list-disc">
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

        <div className="flex flex-col">
          <div className="panel min-w-full">
            <div className="min-w-full">
              {biography ? (
                <>
                  <h1 className="text-2xl text-center">{`${name}'s story:`}</h1>
                  <div
                    className="p-5 flex flex-col justify-between space-y-6"
                    dangerouslySetInnerHTML={{ __html: bio }}
                  ></div>{" "}
                </>
              ) : (
                <div className="p-5 flex flex-col justify-between space-y-6">
                  <p>
                    We have not yet added biographical information for {name}
                  </p>
                  <p>
                    Do you have information you'd like to share about {name}?
                    Please email{" "}
                    <Link href="mailto:submissions@saytheirnamesmemorials.com">
                      submissions@saytheirnamesmemorials.com
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await axios.get(
    `http://localhost:5000/lives/${context.params.id}`
  );

  const entry = await res.data;

  return {
    props: {
      entry: entry.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(`http://localhost:5000/lives`);

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
