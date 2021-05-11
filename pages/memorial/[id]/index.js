import axios from "axios";
import Image from "next/image";
import ImageBg from "../../../components/ImageBg";
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
    start_date_display,
    end_date_display,
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

  return (
    <>
      <ImageBg image={s3} height="h-screen lg:h-full">
        <h1 className="text-5xl text-center">{name}</h1>
        <p className="text-xl">
          {start_date_display} - {end_date_display}
        </p>
        {donate_link !== "" && (
          <Link href={donate_link}>
            <button className="btn my-5">
              Click to help cover costs of materials
            </button>
          </Link>
        )}
      </ImageBg>
      {location_lat && location_lng && (
        <section>
          <div className="panel w-11/12 mt-5 flex flex-col lg:flex-row">
            <div className="w-full">
              <GoogleMap
                lat={parseFloat(location_lat)}
                lng={parseFloat(location_lng)}
              />
            </div>
            <div className="w-full flex justify-center items-center p-5 text-center">
              <h1 className="text-xl">{location}</h1>
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
                      <Link href={s.website} key={i}>
                        <li className="cursor-pointer">{s.title}</li>
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
    `${process.env.API_URL}/memorials/${context.params.id}`
  );

  const entry = await res.data;

  return {
    props: {
      entry: entry.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(`${process.env.API_URL}/memorials`);

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
