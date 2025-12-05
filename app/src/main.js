import "./style.css";
// npm install
// npm run dev
// npm run build
// npm run preview
import { pokemonTrivia } from "./trivia";
import { items } from "./shop";

const pokemon = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    canEvolve: true,
    evolvesTo: 2,
    level: 5,
    levelRequirement: 16,
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
    evolvesTo: 3,
    levelRequirement: 32,
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
    evolvesTo: null,
    levelRequirement: null,
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
    evolvesTo: 5,
    level: 5,
    levelRequirement: 16,
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
    evolvesTo: 6,
    levelRequirement: 36,
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
    evolvesTo: null,
    levelRequirement: null,
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
    evolvesTo: 8,
    level: 5,
    levelRequirement: 16,
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
    evolvesTo: 9,
    levelRequirement: 36,
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
    evolvesTo: null,
    levelRequirement: null,
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
    evolvesTo: 11,
    levelRequirement: 7,
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
    evolvesTo: 12,
    levelRequirement: 10,
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
    evolvesTo: null,
    levelRequirement: null,
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
    evolvesTo: 14,
    levelRequirement: 7,
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
    evolvesTo: 15,
    levelRequirement: 10,
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
    evolvesTo: null,
    levelRequirement: null,
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
    evolvesTo: 17,
    levelRequirement: 18,
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
    evolvesTo: 18,
    levelRequirement: 36,
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
    evolvesTo: null,
    levelRequirement: null,
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
    evolvesTo: 20,
    levelRequirement: 20,
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
    evolvesTo: null,
    levelRequirement: null,
    items: { item1: "none" },
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
    level: 5,
  },
];

let cart = [];
let total = 0;
let money = 500;

function updateMoney(amount) {
  document.querySelector(
    ".moneyDisplay"
  ).textContent = `Pokedollars: $${amount}`;
}

updateMoney(money);

const typeColors = {
  Fire: "#f58686ff",
  Water: "#9cb5f1ff",
  Grass: "#c7f0b3ff",
  Electric: "#F8D030",
  Psychic: "#F85888",
  Ice: "#98D8D8",
  Dark: "#666666ff",
  Fairy: "#EE99AC",
  Normal: "#eeeea6ff",
  Fighting: "#C03028",
  Flying: "#cec2f3ff",
  Poison: "#A040A0",
  Ground: "#E0C068",
  Rock: "#B8A038",
  Bug: "#A8B820",
  Ghost: "#705898",
  Steel: "#A9A9A9",
  Dragon: "#7038F8",
};

const DOMSelectors = {
  container: document.querySelector(".container"),
  levelButton: document.querySelector(".levelButton"),
  levelDisplay: document.querySelector(".levelDisplay"),
  yourPokemon: document.querySelector(".yourPokemon"),
};

// create card function
function makeCard(poke, location) {
  const types = poke.type.split("/");
  const primaryType = types[0];
  const secondaryType = types[1] || null;

  const cardClasses = secondaryType
    ? `card type-${primaryType} type-${secondaryType.toLowerCase()}`
    : `card type-${primaryType}`;

  location.insertAdjacentHTML(
    "beforeend",
    `<div class="${cardClasses}" data-primary = "${primaryType}" data-secondary="${secondaryType}" data-id="${
      poke.id - 1
    }">
            <h2 class="cardPokemon">${poke.name}</h2>
            <img src="${poke.sprite}" alt="${poke.name}" />
            <button class="cardButton">Select</button>
            </div>
        `
  );
  const newCard = location.lastElementChild;
  applyCardBackground(newCard);
}

function applyCardBackground(card) {
  const primaryType = card.getAttribute("data-primary");
  const secondaryType = card.getAttribute("data-secondary");

  const color1 = typeColors[primaryType] || "#FFFFFF";
  const color2 =
    secondaryType && secondaryType !== "null"
      ? typeColors[secondaryType] || "#FFFFFF"
      : null;

  if (secondaryType && color2) {
    card.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  } else {
    card.style.backgroundColor = color1;
  }
}

function updateBackground(pokeType) {
  const primaryType = pokeType.split("/")[0];
  const color = typeColors[primaryType] || "#FFFFFF";
  document.body.style.backgroundColor = color;
}

function setupStarterButtons() {
  const buttons = document.querySelectorAll(".cardButton");

  buttons.forEach((button) => {
    let clickedOnce = false;

    button.addEventListener("click", (event) => {
      // HIDE OTHER CARDS AFTER SELECTION

      if (!clickedOnce) {
        clickedOnce = true;
        button.textContent = "Are you sure?";
        button.classList.add(confirmationButton);

        setTimeout(() => {
          clickedOnce = false;
          button.textContent = "Select";
        }, 3000);
        return;
      }

      DOMSelectors.container.innerHTML = "";
      const index = event.target.closest(".card").getAttribute("data-id");
      makeCard(pokemon[index], DOMSelectors.container);
      makeCard(pokemon[index], DOMSelectors.yourPokemon);
      // REMOVE SELECT BUTTON
      DOMSelectors.container.firstChild.querySelector(".cardButton").remove();
      DOMSelectors.yourPokemon.firstChild.querySelector(".cardButton").remove();
      // REMOVE PICK YOUR STARTER TEXT
      document.querySelector(".starterText").remove();
      // SHOW STARTER STATS
      const statsDiv = document.createElement("div");
      statsDiv.classList.add("statsDiv");
      statsDiv.innerHTML = `
        <h2>${pokemon[index].name} Stats</h2>
        <p>Type: ${pokemon[index].type}</p>
        <p>Hunger: ${pokemon[index].hunger}</p>
        <p>Happiness: ${pokemon[index].happiness}</p>
        <p>Energy: ${pokemon[index].energy}</p>
        <p>Health: ${pokemon[index].health}</p>
        <button class="levelButton">TEMPORARY</button>
        <p class = "levelDisplay">Level: ${pokemon[index].level}</p>
      `;
      // Update background color based on type
      updateBackground(pokemon[index].type);
      DOMSelectors.container.appendChild(statsDiv);
      // REVEAL NEW STUFF
      document.querySelector(".subHeader").classList.remove("Hidden");
      document.querySelector(".yourPokemon").classList.remove("Hidden");
      setUpLevelButton();
    });
  });
}

function checkEvolution(poke) {
  if (poke.canEvolve && poke.level >= poke.levelRequirement) {
    const nextEvolution = pokemon.find((p) => p.id === poke.evolvesTo);
    if (nextEvolution) {
      nextEvolution.level = poke.level; // Carry over the level to the new evolution
      console.log(`${poke.name} is evolving into ${nextEvolution.name}!`);
      // Update the card to show the new evolution
      DOMSelectors.container.innerHTML = "";
      DOMSelectors.yourPokemon.innerHTML = "";
      makeCard(nextEvolution, DOMSelectors.container);
      makeCard(nextEvolution, DOMSelectors.yourPokemon);
      //remove the select button if it exists
      const selectButton = DOMSelectors.container.querySelector(".cardButton");
      const selectButtonYourPokemon =
        DOMSelectors.yourPokemon.querySelector(".cardButton");
      if (selectButton || selectButtonYourPokemon) {
        selectButton.remove();
        selectButtonYourPokemon.remove();
      }
      // Update stats display
      const statsDiv = document.createElement("div");
      statsDiv.classList.add("statsDiv");
      statsDiv.innerHTML = `
        <h2>${nextEvolution.name} Stats</h2>
        <p>Type: ${nextEvolution.type}</p>
        <p>Hunger: ${nextEvolution.hunger}</p>
        <p>Happiness: ${nextEvolution.happiness}</p>
        <p>Energy: ${nextEvolution.energy}</p>
        <p>Health: ${nextEvolution.health}</p>
        <button class="levelButton">TEMPORARY</button>
        <p class = "levelDisplay">Level: ${poke.level}</p>
      `;
      DOMSelectors.container.appendChild(statsDiv);
    }
  }
}

function setUpLevelButton() {
  const levelButton = document.querySelector(".levelButton");
  levelButton.addEventListener("click", (event) => {
    const pokemonName = document
      .querySelector(".statsDiv h3")
      .textContent.split(" ")[0];
    const poke = pokemon.find((p) => p.name === pokemonName);
    poke.level = (poke.level || 1) + 1;
    const levelDisplay = document.querySelector(".levelDisplay");
    levelDisplay.textContent = `Level: ${poke.level}`;
    console.log(`${poke.name} leveled up to ${poke.level}`);
    // CHECK EVO
    checkEvolution(poke);
  });
}

function setUpMinigameButton() {
  const button = document.getElementById("minigameButton");
  button.addEventListener("click", () => {
    document.querySelector(".main").classList.add("Hidden");
    document.querySelector(".shop").classList.add("Hidden");
    document.querySelector(".minigames").classList.remove("Hidden");
    document.querySelector(".sidebar").classList.toggle("open");
    setUpClosePageButton();
  });
}

function setUpClosePageButton() {
  const button = document.querySelector(".closePage");
  button.addEventListener("click", () => {
    document.querySelector(".minigames").classList.add("Hidden");
    document.querySelector(".shop").classList.add("Hidden");
    document.querySelector(".main").classList.remove("Hidden");
    document.querySelector(".sidebar").classList.toggle("open");
  });
}

// TRIVIA MINIGAME DIVIDER

function makeQuestion(list) {
  const question = list[Math.floor(Math.random() * list.length)];
  console.log(question);
  const container = document.querySelector(".minigamePlayer");
  container.innerHTML = "";
  let answersHTML = question.answers
    .map(
      (answer) =>
        `<button class="answerButton" data-answer="${answer}">${answer}</button>`
    )
    .join("");

  container.insertAdjacentHTML(
    "beforeend",
    `<div class="trivia">
      <p class="questionText">${question.question}</p>
      <div class= "answers">${answersHTML}</div>
    </div>`
  );

  const buttons = container.querySelectorAll(".answerButton");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const selected = event.target.textContent;
      buttons.forEach((btn) => (btn.disabled = true));
      if (selected === question.correct) {
        console.log("correct");
        event.target.classList.add("correctAnswer");
        money += 250;
        updateMoney(money);
        container.insertAdjacentHTML(
          "beforeend",
          `<div class="correct">
        <h2>Correct!</h2>
        <h2>+250 Pokedollars</h2>
        </div>
        `
        );
      } else {
        console.log("wrong");
        event.target.classList.add("wrongAnswer");
        container.insertAdjacentHTML(
          "beforeend",
          `<div class="wrong">
        <h2>Wrong!</h2>
        </div>
        `
        );
      }
      setTimeout(() => {
        container.innerHTML = "";
        makeQuestion(list);
      }, 3000);
    });
  });
}

// SHOP STUFF

function setUpShopButton() {
  const button = document.getElementById("shopButton");
  button.addEventListener("click", () => {
    document.querySelector(".main").classList.add("Hidden");
    document.querySelector(".minigames").classList.add("Hidden");
    document.querySelector(".shop").classList.remove("Hidden");
    document.querySelector(".sidebar").classList.toggle("open");
  });
}

function makeItem(item) {
  const container = document.querySelector(".itemContainer");

  container.insertAdjacentHTML(
    "beforeend",
    `<div class ="item" data-name = "${item.name}">
    <h2 class="itemName"> ${item.name} </h2>
    <img src="${item.sprite}" alt="${item.name}" class ="itemSprite" />
    <h2 class="itemPrice"> $${item.price} </h2>
    <button class="itemButton"> Add to Cart </button>
    </div>`
  );
}

function setUpBuyButton() {
  const buttons = document.querySelectorAll(".itemButton")
  const container = document.querySelector(".cartItems")
  total = 0
  buttons.forEach(button => {
    button.addEventListener("click", (event) => {
    const item = event.target.closest(".item");
    const productName = item.dataset.name
    const product = items.find(p => p.name === productName)
    const inCart = cart.find(c => c.name === product.name)


    if(inCart) {
      inCart.quantity++;
      const existingItem = container.querySelector(`[data-title="${product.name}"]`)
      console.log(existingItem);
      existingItem.textContent = `${product.name} x${inCart.quantity}`
      console.log(inCart.quantity);
      total = total + product.price
      document.querySelector(".cartTotal").textContent = `Your total is: $${total}`
    } else {
      cart.push({...product, quantity:1});
      container.insertAdjacentHTML(
        "beforeend",
        `<h2 class= "cartItem" data-title="${product.name}">${product.name} x1</h2>`
        
      )
      total = total + product.price
      document.querySelector(".cartTotal").textContent = `Your total is: $${total}`
    }
    console.log(cart);
  });
  })

  const checkoutButton = document.querySelector(".checkoutButton")
  let clickedOnce = false;

  checkoutButton.addEventListener("click", () => {

  if (!clickedOnce) {
    clickedOnce = true;
    checkoutButton.textContent = "Confirm";
    checkoutButton.classList.add("confirmationButton");

    setTimeout(() => {
      clickedOnce = false;
      checkoutButton.textContent = "Checkout";
    }, 3000);
    return;
  } else {
    if (money >= total) {
    money = money-total;
    cart = [];
    container.textContent = "";
    total = 0;
    document.querySelector(".cartTotal").textContent = `Your total is: $${total}`;
    updateMoney(money);
    console.log("test")
  } else {
    checkoutButton.textContent = "Not enough Pokedollars";
  }}

  })
}




// INITIAL STARTERS
makeCard(pokemon[0], DOMSelectors.container);
makeCard(pokemon[3], DOMSelectors.container);
makeCard(pokemon[6], DOMSelectors.container);

setupStarterButtons();

//INITIALIZE SIDEBAR

document.querySelector(".toggleButton").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});

setUpMinigameButton();
setUpShopButton();

// TRIVIA

document.addEventListener("keydown", (event) => {
  const minigames = document.querySelector(".minigames");
  const startScreen = document.querySelector(".minigameStart");

  if (
    minigames &&
    !minigames.classList.contains("Hidden") &&
    event.key === "Enter"
  ) {
    if (startScreen) startScreen.classList.add("Hidden");
    document.querySelector(".minigamePlayer").classList.remove("Hidden");
    //START GAME HERE
  }
});

makeQuestion(pokemonTrivia);

// SHOP
items.forEach((itm) => makeItem(itm));

document.querySelector(".cartButton").addEventListener("click", () => {
  document.querySelector(".cartSlider").classList.toggle("open");
  document.querySelector(".cartButton").classList.toggle("open")
});

setUpBuyButton();