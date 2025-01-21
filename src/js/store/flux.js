const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBaseStarWars: "https://www.swapi.tech/api",
      characters: JSON.parse(localStorage.getItem("characters")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      favoritesCharacters: [],
      favoritesPlanets: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      loadCharacters: async () => {
        const store = getStore();
        if (store.characters <= 0) {
          try {
            const response = await fetch(
              `${getStore().urlBaseStarWars + "/people"}`
            );
            console.log("respuesta de personajes: ", response.ok);
            console.log("estatus de personajes: ", response.status);

            const data = await response.json();

            for (const people of data.results) {
              const responsePeople = await fetch(people.url);
              const dataPeople = await responsePeople.json();
              setStore({
                characters: [...store.characters, dataPeople.result],
              });
            }
            localStorage.setItem(
              "characters",
              JSON.stringify(store.characters)
            );
            console.log(store.characters);
          } catch (error) {
            console.error("error", error);
          }
        }
      },
      loadPlanets: async () => {
        const store = getStore();
        if (store.planets <= 0) {
          try {
            const response = await fetch(
              `${getStore().urlBaseStarWars + "/planets"}`
            );
            console.log("respuesta de planetas : ", response.ok);
            console.log("estatus de planetas: ", response.status);

            const data = await response.json();

            for (const planet of data.results) {
              const responsePlanets = await fetch(planet.url);
              const dataPlanets = await responsePlanets.json();
              setStore({
                planets: [...store.planets, dataPlanets.result],
              });
            }
            localStorage.setItem("planets", JSON.stringify(store.planets));
            console.log(store.planets);
          } catch (error) {
            console.error("error", error);
          }
        }
      },
      addFavoritesCharacters: (character) => {
        const store = getStore();
        const favorite = store.favoritesCharacters.some(
          (item) => item._id === character._id
        );
        if (favorite) {
          const deleteFavorite = store.favoritesCharacters.filter(
            (item) => item._id !== character._id
          );
          setStore({
            favoritesCharacters: deleteFavorite,
          });
        } else {
          setStore({
            favoritesCharacters: [...store.favoritesCharacters, character],
          });
        }
      },
      addFavoritesPlanets: (planet) => {
        const store = getStore();
        const favorite = store.favoritesPlanets.some(
          (item) => item._id === planet._id
        );
        if (favorite) {
          const deleteFavorite = store.favoritesPlanets.filter(
            (item) => item._id !== planet._id
          );
          setStore({
            favoritesPlanets: deleteFavorite,
          });
          console.log("Ya existe el favorito");
        } else {
          setStore({
            favoritesPlanets: [...store.favoritesPlanets, planet],
          });
        }
        console.log(store.favoritesPlanets);
      },
    },
  };
};

export default getState;
