import { useEffect, useState } from "react";
import CharactersCards from "../../core/layout/charactersCards/CharactersCards";
import "../createCharacter/CreateCharacter.css";
import axios from "axios";

const CreateCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [update, setUpdate] = useState(false);

  const url = "http://localhost:5173/";

  useEffect(() => {
    // const url = "https://test-vercel-20240323.vercel.app/personajes";
    axios.get(`${url}/characters`).then((res) => {
      if (Array.isArray(res.data.data) && res.data.data.length > 0) {
        setCharacters(res.data.data);
      }
    });
  }, [update]); // Entre esos corchetes, no metemos nada que mueva el useEffect, porque queremos que se cargue de forma dinámica.

  // Esta función va a gestionar el botón "Guardar"
  const submitForm = (event) => {
    event.preventDefault(); // Eso para decirle que nos deje manejar, que no haga nada por defecto.
    // console.log(event.target[0].value);
    const character = {
      name: event.target[0].value,
      surname: event.target[1].value,
      house: event.target[2].value,
    };

    axios
      .post(`${url}/characters`, character)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setCharacters([...characters, character]); // Operador de propagación para guardar los personajes creados + el nuevo personaje.
    document.querySelectorAll(".char-form-input").forEach((input) => {
      input.value = ""; // Después recorre los inputs para vaciarlos.
    });
    setUpdate(true);
  };

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  // Crear el formulario
  return (
    <>
      <form
        onSubmit={submitForm}
        /* Le decimos al formulario que apunte a la función que gestionará el botón. Cada vez que le demos al botón, pasará lo que tenemos puesto dentre de la función */
        className="char-form"
      >
        <input
          type="text"
          className="char-form-input"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          className="char-form-input"
          placeholder="Surname"
          name="surname"
        />
        <input
          type="text"
          className="char-form-input"
          placeholder="House"
          name="house"
        />

        <button className="char-form-submit" type="submit">
          Submit
        </button>
      </form>

      {characters.length > 0 ? ( // "personajes.length > 0 &&" para que se vaya creando la table solo si tenemos por lo menos un personaje creado. Sino la table no será visible.
        <table className="char-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>House</th>
            </tr>
          </thead>
          <tbody>
            {characters.map(
              (
                character //Si ponemos una llave en vez de la útlima paréntesis, se esperará un return. Ponemos el <PersonajesCard /> de forma implicita con unos paréntesis.
              ) => (
                <CharactersCards key={character.name} data={character} />
              )
            )}
            {/*También valdría esto:
              {personajes.map((personaje) => {
              return <PersonajesCard key={personaje.name} data={personaje} />;
              })}*/}
          </tbody>
        </table>
      ) : (
        <div className="no-char">Get your own character...</div>
      )}
    </>
  );
};

export default CreateCharacter;
