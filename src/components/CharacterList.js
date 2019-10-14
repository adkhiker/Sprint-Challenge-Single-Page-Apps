import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
function CharacterList() {
 
  const [characters, setCharacters] = useState([]);
  const [searchChar, setSearchChar] = useState();

  const onSearch = value => {
    setSearchChar(value);
  };
  useEffect(() => {
  
    if (searchChar) {
      Axios.get(`https://rickandmortyapi.com/api/character/?name=${searchChar}`)
        .then(data => {
          console.log(data);
          setCharacters(data.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      Axios.get("https://rickandmortyapi.com/api/character/")
        .then(data => {
          console.log(data.data.results);
          setCharacters(data.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [searchChar]);

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <section className="character-list grid-view">
        {characters.map(character => {
          return <CharacterCard character={character} key={character.url} />;
        })}
      </section>
    </div>
  );
}

export default CharacterList;
