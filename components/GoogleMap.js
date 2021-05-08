import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({ lat, lng }) => {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.PLACES_KEY,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: { lat, lng },
        zoom: 17,
      });
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
      });
    });
  });
  return <div id="map" className="h-96" ref={googlemap} />;
};

export default GoogleMap;
