import axios from "axios";
import { useEffect, useState } from "react";
import CharactersCards from "../../core/layout/charactersCards/CharactersCards";
import "../gallery/Gallery.css";

const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("");

  const getCharacters = async () => {
    // OPCIÓN Nº1: async/await
    // const api = await fetch("https://hp-api.onrender.com/api/characters");
    // const json = await api.json();
    // console.log(json);
    // setCharacters(json);

    // OPCIÓN Nº2: con axios, haciendo una petición de tipo get
    const api = await axios.get("https://hp-api.onrender.com/api/characters");
    console.log(api.data);
    setCharacters(api.data);

    //OPCIÓN Nº3: con un .then
    // const api = axios
    //   .get("https://hp-api.onrender.com/api/characters")
    //   .then((data) => console.log(data));
  };
  useEffect(() => {
    getCharacters();
  }, []);

  const handleNameChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleHouseChange = (event) => {
    setSelectedHouse(event.target.value);
  };

  return (
    <div>
      <div className="input-selector">
        <input
          className="input"
          type="text"
          placeholder="Write a name..."
          value={characterName}
          onChange={handleNameChange}
        />

        {/* Selector to select the House */}
        <select
          className="selector"
          value={selectedHouse}
          onChange={handleHouseChange}
        >
          <option value="">Select a house</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </div>

      {/* Show filtered characters */}
      <div className="card-container">
        {characters
          .filter((character) => {
            // Filter characters by selected house and search by name
            const matchesHouse =
              selectedHouse === "" || character.house === selectedHouse;
            const matchesCharacterName = character.name
              .toLowerCase()
              .includes(characterName.toLowerCase());
            return matchesHouse && matchesCharacterName;
          })
          .map((character, index) => (
            <CharactersCards key={index} character={character} />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
