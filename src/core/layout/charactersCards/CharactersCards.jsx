import("../charactersCards/CharactersCards.css");

const CharactersCards = ({ character }) => {
  return (
    <div className="card-container">
      <div className="char-card">
        <h4>{character.name}</h4>
        <img src={character.image} />
        {/* <p>alias: {character.alternate_names.join(", ")}</p> */}
        <p>Species: {character.species}</p>
        <p>House: {character.house}</p>
        {/* <p>Wizard: {character.wizard}</p> */}
        <p>Ancestry: {character.ancestry}</p>
        {/* <p>Wand: {character.wand}</p> */}
        {/* <p>Patronus: {character.patronus}</p> */}
      </div>
    </div>
  );
};

export default CharactersCards;
