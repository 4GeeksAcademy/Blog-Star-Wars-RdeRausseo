const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBaseStarWars: "https://www.swapi.tech/api",
      characters: [],
      planets: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      loadCharacters: async () => {
        const store = getStore();
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
          console.log(store.characters)
        } catch (error) {
          console.error("error", error);
        }
      },
      loadPlanets: async () => {
        try {
          const store = getStore();
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
          console.log(store.planets);
        } catch (error) {
          console.error("error", error);
        }
      },
    },
  };
};

export default getState;
