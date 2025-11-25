import "./style.css";
// import { setupCounter } from './counter.js' HOW TO TAKE SOMETHING FROM ANOTHER FILE AND IMPORT IT

// npm install
// npm run dev
// npm run build
// npm run preview

const pokemon = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 2,
    name: "Ivysaur",
    type: "Grass/Poison",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 3,
    name: "Venusaur",
    type: "Grass/Poison",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    canEvolve: false,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },

  {
    id: 4,
    name: "Charmander",
    type: "Fire",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 5,
    name: "Charmeleon",
    type: "Fire",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 6,
    name: "Charizard",
    type: "Fire/Flying",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    canEvolve: false,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },

  {
    id: 7,
    name: "Squirtle",
    type: "Water",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 8,
    name: "Wartortle",
    type: "Water",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 9,
    name: "Blastoise",
    type: "Water",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    canEvolve: false,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },

  {
    id: 10,
    name: "Caterpie",
    type: "Bug",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 11,
    name: "Metapod",
    type: "Bug",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 12,
    name: "Butterfree",
    type: "Bug/Flying",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    canEvolve: false,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },

  {
    id: 13,
    name: "Weedle",
    type: "Bug/Poison",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 14,
    name: "Kakuna",
    type: "Bug/Poison",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 15,
    name: "Beedrill",
    type: "Bug/Poison",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    canEvolve: false,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },

  {
    id: 16,
    name: "Pidgey",
    type: "Normal/Flying",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 17,
    name: "Pidgeotto",
    type: "Normal/Flying",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 18,
    name: "Pidgeot",
    type: "Normal/Flying",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    canEvolve: false,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },

  {
    id: 19,
    name: "Rattata",
    type: "Normal",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    canEvolve: true,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
  },
  {
    id: 20,
    name: "Raticate",
    type: "Normal",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    canEvolve: false,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
    level: 5,
  },
];

const DOMSelectors = {
  container: document.querySelector(".container"),
};

// create card function
function makeCard(poke) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
            <h3 class="cardPokemon">${poke.name}</h3>
            <img src="${poke.sprite}" alt="${poke.name}" />
            <button class="cardButton">Select</button>
            </div>
        `
  );
}

pokemon.forEach((poke) => makeCard(poke));
