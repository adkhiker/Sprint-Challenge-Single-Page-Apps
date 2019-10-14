import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";

function LocationList() {
  
  const [locations, setLocations] = useState([]);
  useEffect(() => {

    Axios.get("https://rickandmortyapi.com/api/location/")
      .then(data => {
        console.log(data.data.results);
        setLocations(data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {locations.map(location => {
        return <LocationCard location={location} key={location.url} />;
      })}
    </section>
  );
}

export default LocationList;
