export const goHome = (history) => {
  history.push("/");
};

export const goToPokedex = (history) => {
  history.push("/pokedex");
};

export const goToDetails = (history, pokeName) => {
  history.push(`/details/${pokeName}`);
};
