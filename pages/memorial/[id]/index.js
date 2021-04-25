import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import GoogleMap from "../../../components/GoogleMap";
import { useState } from "react";

const memorial = ({ entry }) => {
  const {
    s3,
    name,
    sponsors,
    organizers,
    location,
    start_date,
    end_date,
    media,
    donate_link,
    location_lat,
    location_lng,
  } = entry;

  const [listsEmpty] = useState(
    sponsors[0].name === "" &&
      organizers[0].name === "" &&
      media[0].title === ""
  );

  console.log(
    sponsors[0].name === "" &&
      organizers[0].name === "" &&
      media[0].title === ""
  );
  return (
    <>
      <div className="bg-image">
        <div className="bg-overlay"></div>
        <Image
          src={s3 || "/memorial_default.jpg"}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <section className="pt-5">
        <div className="panel w-11/12 flex flex-col justify-center items-center">
          <div className="w-10/12 py-5">
            <Image
              src={s3 || "/memorial_default.jpg"}
              layout="responsive"
              width="16"
              height="9"
              objectFit="cover"
            />
          </div>
          <h1 className="text-3xl">{name}</h1>
          <p>
            {start_date} - {end_date}
          </p>
          {donate_link !== "" && (
            <Link href={donate_link}>
              <button className="btn my-5">
                Click to help cover costs of materials
              </button>
            </Link>
          )}
        </div>
      </section>
      {location_lat && location_lng && (
        <section>
          <div className="panel w-11/12 mt-5 flex">
            <div className="w-6/12">
              <GoogleMap
                lat={parseFloat(location_lat)}
                lng={parseFloat(location_lng)}
              />
            </div>
            <div className="w-6/12 flex justify-center items-center">
              <h1 className="text-2xl">{location}</h1>
            </div>
          </div>
        </section>
      )}
      {!listsEmpty && (
        <section className="">
          <div className="panel w-11/12 grid grid-flow-col auto-cols-auto justify-around my-5">
            {sponsors[0].name !== "" && (
              <div className="flex flex-col items-center">
                <h1 className="text-2xl mb-5">Sponsors:</h1>
                <ul className="text-center">
                  {sponsors.map((s, i) => {
                    return <li key={i}>{s.name}</li>;
                  })}
                </ul>
              </div>
            )}

            {organizers[0].name !== "" && (
              <div className="flex flex-col items-center">
                <h1 className="text-2xl">Organizers:</h1>
                <ul>
                  {organizers.map((s, i) => {
                    return <li key={i}>{s.name}</li>;
                  })}
                </ul>
              </div>
            )}

            {media[0].title !== "" && (
              <div className="flex flex-col items-center text-center justify-between">
                <h1 className="text-2xl mb-5">News and Media:</h1>
                <ul className="flex flex-col justify-between h-full">
                  {media.map((s, i) => {
                    return (
                      <Link href={s.website}>
                        <li key={i} className="cursor-pointer">
                          {s.title}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await axios.get(
    `http://localhost:5000/memorials/${context.params.id}`
  );

  const entry = await res.data;

  return {
    props: {
      entry: entry.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(`http://localhost:5000/memorials`);

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

export default memorial;
