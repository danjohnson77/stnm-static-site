import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function names({ names, details }) {
  const handleUpdate = (e) => {
    console.log("UPDATE");
  };

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const [state, setState] = useState({
    name: "",
    lat: "",
    lng: "",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [locSelected, setLocSelected] = useState(false);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleLocationChange = async (e) => {
    setState({ ...state, location: e.target.value });
    setLocSelected(false);

    if (e.target.value.length > 4) {
      try {
        const res = await axios.post(
          `http://localhost:5000/location?input=${e.target.value}`,
          {
            input: e.target.value,
          }
        );
        res.data.data && console.log("res", res.data.data);
        res.data.data && setSuggestions(res.data.data);
        refreshData();
        console.log("sug", suggestions);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLocationClick = async (e, lat, lng) => {
    console.log("click", e.target.getAttribute("value"));
    setState({ ...state, location: e.target.getAttribute("value"), lat, lng });
    setLocSelected(true);
  };

  return (
    <>
      <div className="bg-image">
        <div className="bg-overlay"></div>
        <Image src="/names.jpg" layout="fill" objectFit="cover" />
      </div>
      <section className="w-screen text-white flex flex-col justify-center items-center py-24 z-0">
        <div className="w-11/12 bg-black rounded-md bg-opacity-50 p-5 mx-auto">
          <h3 className="text-xl mb-2">Disclaimer</h3>
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
              info@saytheirnamesmemorials.com
            </Link>
          </p>

          <p>
            Local memorials nationwide assume all liability for the photos and
            information in their memorials.
          </p>
        </div>
        <div className="my-10 w-11/12 bg-black rounded-md bg-opacity-50 p-5">
          <h3 className="text-xl">Search Filters:</h3>
          <form className="flex flex-col">
            <div className="flex">
              <label htmlFor="name" className="flex items-center  ">
                <span className="text-white-700 mr-2">Name:</span>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="bg-transparent mt-0 block  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-darkBrown"
                />
              </label>

              <label
                htmlFor="incident_year"
                className="flex items-center justify-center"
              >
                <span className="text-white-700 mr-2">Year:</span>
                <input
                  type="number"
                  name="incident_start"
                  onChange={handleChange}
                  className="bg-transparent mt-0 block px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-darkBrown text-center w-2/12"
                />
                <span> - </span>
                <input
                  type="number"
                  name="incident_end"
                  onChange={handleChange}
                  className="bg-transparent mt-0 block  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-darkBrown text-center w-2/12"
                />
              </label>
              <label htmlFor="location" className="flex items-center">
                <span className="text-white-700 mr-2">Location:</span>
                <span className="text-white-700 mr-2">Within</span>
                <select className="bg-transparent mx-1" name="locationRange">
                  <option value="5">5</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="125">125</option>
                </select>
                <span className="text-white-700 mr-2"> miles of</span>
                <div className="flex flex-col relative">
                  <input
                    type="text"
                    name="location"
                    value={state.location}
                    autoComplete="off"
                    onChange={handleLocationChange}
                    className="bg-transparent mt-0 block px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-darkBrown "
                  />
                  <div className="relative">
                    <ul className="bg-transparent absolute  p-2 divide-y-2">
                      {!locSelected &&
                        suggestions &&
                        suggestions.length > 0 &&
                        suggestions.map((row, index) => {
                          const { city, state, lat, lng } = row;

                          return (
                            <li
                              onClick={(e) => {
                                handleLocationClick(e, lat, lng);
                              }}
                              className="hover:bg-white hover:text-black"
                              key={index}
                              value={`${city}, ${state}`}
                            >{`${city}, ${state}`}</li>
                          );
                        })}
                    </ul>
                    <input type="hidden" name="lat" value={state.lat} />
                    <input type="hidden" name="lng" value={state.lng} />
                  </div>
                </div>
              </label>
            </div>
            <div className="grid grid-cols-2 mt-5">
              {details.map((d, index) => {
                return (
                  <div key={index} className="flex p-1 items-center">
                    <input type="radio" value={d.tag} name="details" />
                    <label htmlFor={d.tag} className="ml-1">
                      {d.display_text}
                    </label>
                  </div>
                );
              })}
            </div>
            <button className="btn my-5" onClick={handleUpdate}>
              UPDATE
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-black w-11/12 justify-center items-center p-5 gap-5 rounded-lg bg-opacity-50">
          {names &&
            names.map((n, index) => {
              const { name, birth_year, incident_year, id, s3 } = n;
              return (
                <Link href={`/name/${id}`} key={index}>
                  <div className="flex flex-col justify-center items-center cursor-pointer z-0 p-5 transform hover:scale-105 transition-all ">
                    <Image src={s3} alt="" width="200" height="300" />
                    <p className="text-xl mt-5">{name}</p>
                    <p>{`${birth_year || "????"} - ${
                      incident_year || "????"
                    }`}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const detailsStr = Array.isArray(context.query.details)
    ? context.query.details.join(",")
    : context.query.details;

  const rangeStr = `${
    context.query.incident_start && context.query.incident_start
  },${context.query.incident_end && context.query.incident_end}`;

  const res = await axios.get(
    `http://localhost:5000/lives?${
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
    },
  };
};
