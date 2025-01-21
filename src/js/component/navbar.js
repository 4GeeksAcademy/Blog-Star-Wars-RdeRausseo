import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="h1 text-white me-3 text-decoration-none">
          StarWars
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites{" "}
                {store.favoritesCharacters.length +
                  store.favoritesPlanets.length}
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <h6 className="ms-1"> Characters: </h6>
                {store.favoritesCharacters.map((character) => {
                  return (
                    <li className="p-1" key={character._id}>
                      <Link
                        to={`character/detail/${character._id}`}
                        className="dropdown-item"
                      >
                        {character?.properties?.name}
                      </Link>
                    </li>
                  );
                })}

                <h6 className="ms-1"> Planets: </h6>
                {store.favoritesPlanets.map((planet) => {
                  return (
                    <li className="p-1" key={planet._id}>
                      <Link
                        to={`planet/detail/${planet._id}`}
                        className="dropdown-item"
                      >
                        {planet?.properties?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
