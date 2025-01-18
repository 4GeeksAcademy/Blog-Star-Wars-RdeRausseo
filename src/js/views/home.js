import React, { useContext } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";

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
                    <span className="fw-bold">  hair color:</span> {character.properties.hair_color}{" "}
                    <br />
                    <span className="fw-bold">eye color: </span>
                    {character.properties.eye_color} <br />
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
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
                    <span className="fw-bold"> terrain: </span> {planet.properties.terrain} <br />
                    <span className="fw-bold"> population: </span> {planet.properties.population}{" "}
                    <br />
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
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
