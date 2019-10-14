import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodeCard from "./EpisodeCard";

function LocationList() {
 
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
  
    Axios.get("https://rickandmortyapi.com/api/episode/")
      .then(data => {
        console.log(data.data.results);
        setEpisodes(data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {episodes.map(episode => {
        return <EpisodeCard episode={episode} key={episode.url} />;
      })}
    </section>
  );
}

export default LocationList;
