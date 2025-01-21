import React, { useContext } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-5">
      <div className="row">
        <h2> Characters </h2>

        <div className="col-12 carousel mb-5">
          {store.characters.map((character) => {
            return (
              <div className="card me-2" key={character._id}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title"> {character.properties.name} </h5>
                  <p className="card-text">
                    <span className="fw-bold">Gender: </span>
                    {character.properties.gender} <br />
                    <span className="fw-bold"> hair color:</span>
                    {character.properties.hair_color} <br />
                    <span className="fw-bold">eye color: </span>
                    {character.properties.eye_color} <br />
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to={`character/detail/${character._id}`}
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                    <button
                      className="btn"
                      onClick={() => actions.addFavoritesCharacters(character)}
                    >
                      {store.favoritesCharacters.includes(character) ? (
                        <i class="fa-solid fa-star text-warning"></i>
                      ) : (
                        <i class="fa-regular fa-star"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h2> Planets</h2>
        <div className="col-12 carousel mb-5">
          {store.planets.map((planet) => {
            return (
              <div className="card me-2" key={planet._id}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  className="card-img-top"
                  alt="Esta imagen no se encuentra en la api"
                />
                <div className="card-body">
                  <h5 className="card-title"> {planet.properties.name} </h5>
                  <p className="card-text">
                    <span className="fw-bold"> terrain: </span>
                    {planet.properties.terrain} <br />
                    <span className="fw-bold"> population: </span>
                    {planet.properties.population} <br />
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to={`/planet/detail/${planet._id}`}
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                    <button
                      className="btn"
                      onClick={() => actions.addFavoritesPlanets(planet)}
                    >
                      {store.favoritesPlanets.includes(planet) ? (
                        <i className="fa-solid fa-star text-warning"></i>
                      ) : (
                        <i class="fa-regular fa-star"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
2;
