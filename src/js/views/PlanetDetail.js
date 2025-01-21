import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export default function PlanetDetail() {
  const [details, setDetatils] = useState();
  const { store } = useContext(Context);
  const { theid } = useParams();

  const findPlanet = () => {
    const planetDetail = store.planets.find((planet) => planet._id === theid);
    setDetatils(planetDetail);
  };

  useEffect(() => {
    findPlanet();
    console.log(details);
  }, []);

  return (
    <div className="container p-5">
      <div className="card mt-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${details?.uid}.jpg`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title h1">{details?.properties?.name} </h5>
              <p className="card-text">
                <span className="fw-bold"> Description: </span>{" "}
                {details?.description} <br />
                <span className="fw-bold"> properties: </span>
                {details?.properties?.height} <br />
                <span className="fw-bold"> Mas: </span>{" "}
                {details?.properties?.mass} <br />
                <span className="fw-bold"> hair color: </span>{" "}
                {details?.properties?.hair_color} <br />
                <span className="fw-bold"> Skin color: </span>{" "}
                {details?.properties?.skin_color} <br />
                <span className="fw-bold"> Eye color: </span>
                {details?.properties?.eye_color} <br />
                <span className="fw-bold"> Gender: </span>{" "}
                {details?.properties?.gender} <br />
                <span className="fw-bold"> Identificador: </span> {details?._id}{" "}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
