import { useState } from "react";
import axios from "axios";

const SearchFilters = ({ details, context }) => {
  const handleUpdate = (e) => {
    console.log("UPDATE");
  };

  const [state, setState] = useState({
    ...context,
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
        const res = await axios.post(`http://localhost:5000/location`, {
          input: e.target.value,
        });

        res.data.data && setSuggestions(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLocationClick = async (e) => {
    try {
      const coords = await axios.post("http://localhost:5000/location/coords", {
        place_id: e.target.getAttribute("place_id"),
      });

      setState({
        ...state,
        location: e.target.getAttribute("value"),
        lat: coords.data.data.lat,
        lng: coords.data.data.lng,
      });
      setLocSelected(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col">
      <div className="flex flex-col lg:flex-row w-full lg:justify-around divide-y divider lg:divide-y-0">
        <label htmlFor="name" className="flex flex-col justify-end py-5">
          <span className="text-white-700 mr-2">Name:</span>
          <input
            id="name"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            className="bg-transparent mt-0 block px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-darkBrown"
          />
        </label>

        <label htmlFor="incident_year" className="flex py-5">
          <div className="flex flex-col justify-end lg:items-center">
            <span className="text-white-700 mr-2">Year of Incident:</span>
            <div className="flex items-center lg:justify-center">
              <input
                type="number"
                name="incident_start"
                onChange={handleChange}
                value={state.incident_start}
                className="bg-transparent mt-0 block px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-darkBrown text-center w-2/12"
              />
              <span> to </span>
              <input
                type="number"
                name="incident_end"
                onChange={handleChange}
                value={state.incident_end}
                className="bg-transparent mt-0 block  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-darkBrown text-center w-2/12"
              />
            </div>
          </div>
        </label>
        <label htmlFor="location" className="flex flex-col py-5">
          <span className="text-white-700 mr-2 mb-2">Location:</span>
          <div className="flex">
            <span className="text-white-700 mr-2">Within</span>
            <select
              className="bg-transparent mx-1"
              name="locationRange"
              defaultValue={state.locationRange}
            >
              <option value="5">5</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="125">125</option>
            </select>
            <span className="text-white-700 mr-2"> miles of</span>
          </div>
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
              <ul className="bg-black absolute  py-2 shadow-lg">
                {!locSelected &&
                  suggestions &&
                  suggestions.length > 0 &&
                  suggestions.map((row, index) => {
                    const { description, place_id } = row;

                    return (
                      <li
                        onClick={(e) => {
                          handleLocationClick(e);
                        }}
                        className="hover:bg-white hover:text-black py-2 text-center"
                        key={index}
                        place_id={place_id}
                        value={`${description}`}
                      >{`${description}`}</li>
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
              <input
                type="checkbox"
                value={d.tag}
                name="details"
                defaultChecked={state.details && state.details.includes(d.tag)}
              />
              <label htmlFor={d.tag} className="ml-1">
                {d.display_text}
              </label>
            </div>
          );
        })}
      </div>

      {/* <div className="flex w-full justify-between my-3">
              <label htmlFor="gender" className="flex items-center">
                <span className="text-white-700 mr-2">Gender:</span>

                <select className="bg-transparent mx-1" name="gender">
                  <option value="">Any</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="nonbinary">Non-binary</option>
                </select>
              </label>

              <label htmlFor="lgbtq" className="flex items-center">
                <span className="text-white-700 mr-2">LGBTQ:</span>
                <select className="bg-transparent mx-1" name="lgbtq">
                  <option value="">Any</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unknown">Unknown</option>
                </select>
              </label>

              <label htmlFor="gender" className="flex items-center">
                <span className="text-white-700 mr-2">Cis / Trans:</span>

                <select className="bg-transparent mx-1" name="cis_trans">
                  <option value="">Any</option>
                  <option value="cis">Cis</option>
                  <option value="trans">Trans</option>
                  <option value="unknown">Unknown</option>
                </select>
              </label>
            </div> */}
      <button className="btn my-5" onClick={handleUpdate}>
        UPDATE
      </button>
    </form>
  );
};

export default SearchFilters;
