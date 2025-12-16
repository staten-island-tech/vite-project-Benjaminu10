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
];

let cart = [];
let total = 0;
let money = 500;
let inventory = [];
let currentPokemon = null

loadState();

function updateMoney(amount) {
  document.querySelector(
    ".moneyDisplay"
  ).textContent = `Pokedollars: $${amount}`;
  saveState();
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

function saveState() {
  const state = {
    money,
    cart,
    inventory: inventory.map(item => ({
      name: item.name,
      type: item.type,
      value: item.value,
      quantity: item.quantity,
      sprite: item.sprite,
      desc: item.desc
    })),
    pokemon: pokemon.map((poke) => ({
      id: poke.id,
      level: poke.level,
      hunger: poke.hunger,
      happiness: poke.happiness,
      energy: poke.energy,
      health: poke.health
    })),
    currentPokemonId: currentPokemon ? currentPokemon.id : null
  };
  console.log(state);
  try {
    localStorage.setItem("pokedata", JSON.stringify(state));
    console.log("Saved");
  } catch (e) {
    console.warn("Could not save state:", e)
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem("pokedata");
    if (!raw) return;
    const state = JSON.parse(raw);

    if (typeof state.money === "number") money = state.money;
    if (Array.isArray(state.cart)) cart = state.cart;
    if (Array.isArray(state.inventory)) inventory = state.inventory.map(i => ({ ...i }));

    if (Array.isArray(state.pokemon)) {
      state.pokemon.forEach(saved => {
        const poke = pokemon.find(p => p.id === saved.id);
        if (poke) {
          poke.level = saved.level ?? poke.level;
          poke.hunger = saved.hunger ?? poke.hunger;
          poke.happiness = saved.happiness ?? poke.happiness;
          poke.energy = saved.energy ?? poke.energy;
          poke.health = saved.health ?? poke.health;
        }
      });
    }

    if (state.currentPokemonId != null) {
      currentPokemon = pokemon.find(p => p.id === state.currentPokemonId) || null;
      if (currentPokemon) renderCurrentPokemon(currentPokemon);
    }

    updateMoney(money);
    updateInventory();
      if (state.currentPokemonId) {
    currentPokemon = pokemon.find(mon => mon.id === state.currentPokemonId)
    if (currentPokemon) {
      renderCurrentPokemon(currentPokemon);
    }
  }
  } catch (e) {
    console.warn("Could not load state:", e);
  }
}

function renderCurrentPokemon(poke) {
  DOMSelectors.container.innerHTML = "";
  makeCard(pokemon[currentPokemon.id - 1], DOMSelectors.container);
  DOMSelectors.container.firstChild.querySelector(".cardButton").remove();
  document.querySelector(".starterText").remove();
  const statsDiv = document.createElement("div");
  statsDiv.classList.add("statsDiv");
  statsDiv.innerHTML = `
  <h2 class="statsTitle">${poke.name} Stats</h2>

  <div class="statsLeft">
    <div class="typeRow">
      <span class="statLabel">Type:</span>
      <span class="statValue">${poke.type}</span>
    </div>

    <div class="statsRow">
      <span class="statLabel">Hunger:</span>
      <span class="statValue">${poke.hunger}</span>
      <div class="pokeBar">
        <div class="pokeFill" style="--value:${poke.hunger}%"></div>
      </div>
    </div>

    <div class="statsRow">
      <span class="statLabel">Happiness:</span>
      <span class="statValue">${poke.happiness}</span>
      <div class="pokeBar">
        <div class="pokeFill" style="--value:${poke.happiness}%"></div>
      </div>
    </div>

    <div class="statsRow">
      <span class="statLabel">Energy:</span>
      <span class="statValue">${poke.energy}</span>
      <div class="pokeBar">
        <div class="pokeFill" style="--value:${poke.energy}%"></div>
      </div>
    </div>

    <div class="statsRow">
      <span class="statLabel">Health:</span>
      <span class="statValue">${poke.health}</span>
      <div class="pokeBar">
        <div class="pokeFill" style="--value:${poke.health}%"></div>
      </div>
    </div>

    <div class="typeRow">
      <span class="statLabel">Level:</span>
      <span class="statValue">${poke.level}</span>
    </div>
  </div>
`;
  DOMSelectors.container.appendChild(statsDiv);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv");
  buttonDiv.innerHTML = `
    <button class="actionButton" id="feedButton">Feed</button>
    <button class="actionButton" id="playButton">Play</button>
    <button class="actionButton" id="sleepButton">Sleep</button>
  `;
  DOMSelectors.container.appendChild(buttonDiv);

  updateBackground(poke.type);
  setUpFeedButton();
  setUpPlayButton();
  setUpSleepButton();
  setTimeout(() => {
    restartDecay();
    }, 3000);
}



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

function lowerStats(poke) {
  const stats = ["hunger","happiness","energy","health"]
  const randomStat = stats[Math.floor(Math.random()*stats.length)]
  const random = Math.floor(Math.random()*6)
  poke[randomStat] = (poke[randomStat]||0) - random
  if (poke[randomStat] < 0) poke[randomStat] = 0;
  updateStatsUI(poke)
  console.log(poke[randomStat]);
  saveState();
}

function updateStatsUI(pokemon) {
  const statsDiv = document.querySelector(".statsDiv");
  if (!statsDiv) return;

 statsDiv.innerHTML = `
  <h2 class="statsTitle">${pokemon.name} Stats</h2>

  <div class="statsLeft">
    <div class="typeRow">
      <span class="statLabel">Type:</span>
      <span class="statValue">${pokemon.type}</span>
    </div>

    <div class="statsRow">
      <span class="statLabel">Hunger:</span>
      <span class="statValue">${pokemon.hunger}</span>
      <div class="pokeBar"><div class="pokeFill" style="--value:${pokemon.hunger}%"></div></div>
    </div>

    <div class="statsRow">
      <span class="statLabel">Happiness:</span>
      <span class="statValue">${pokemon.happiness}</span>
      <div class="pokeBar"><div class="pokeFill" style="--value:${pokemon.happiness}%"></div></div>
    </div>

    <div class="statsRow">
      <span class="statLabel">Energy:</span>
      <span class="statValue">${pokemon.energy}</span>
      <div class="pokeBar"><div class="pokeFill" style="--value:${pokemon.energy}%"></div></div>
    </div>

    <div class="statsRow">
      <span class="statLabel">Health:</span>
      <span class="statValue">${pokemon.health}</span>
      <div class="pokeBar"><div class="pokeFill" style="--value:${pokemon.health}%"></div></div>
    </div>

    <div class="typeRow">
      <span class="statLabel">Level:</span>
      <span class="statValue">${pokemon.level}</span>
    </div>
  </div>
`;
}

let decayTimeout = null;

function startDecay() {
  if (!currentPokemon) return;

  function decayLoop() {
    if (!currentPokemon) return;

    lowerStats(currentPokemon);

    const nextTime = (Math.floor(Math.random() * 7) + 3) * 1000;
    decayTimeout = setTimeout(decayLoop, nextTime);
  }

  if (decayTimeout) clearTimeout(decayTimeout);
  decayLoop();
}

function restartDecay() {
  if (decayTimeout) clearTimeout(decayTimeout);
  startDecay();
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
        button.classList.add("confirmationButton");

        setTimeout(() => {
          clickedOnce = false;
          button.textContent = "Select";
        }, 3000);
        return;
      }

      DOMSelectors.container.innerHTML = "";
      const index = event.target.closest(".card").getAttribute("data-id");
      makeCard(pokemon[index], DOMSelectors.container);
      currentPokemon = pokemon[index];

      // REMOVE SELECT BUTTON
      DOMSelectors.container.firstChild.querySelector(".cardButton").remove();
      // REMOVE PICK YOUR STARTER TEXT
      document.querySelector(".starterText").remove();
      // SHOW STARTER STATS
      const statsDiv = document.createElement("div");
      statsDiv.classList.add("statsDiv");
  statsDiv.innerHTML = `
  <h2 class="statsTitle">${currentPokemon.name} Stats</h2>

  <div class="statsLeft">
    <div class="typeRow">
      <span class="statLabel">Type:</span>
      <span class="statValue">${currentPokemon.type}</span>
    </div>

    <div class="statsRow">
      <span class="statLabel">Hunger:</span>
      <span class="statValue">${currentPokemon.hunger}</span>
      <div class="pokeBar">
        <div class="pokeFill" style="--value:${currentPokemon.hunger}%"></div>
      </div>
    </div>

    <div class="statsRow">
      <span class="statLabel">Happiness:</span>
      <span class="statValue">${currentPokemon.happiness}</span>
      <div class="pokeBar">
        <div class="pokeFill" style="--value:${currentPokemon.happiness}%"></div>
      </div>
    </div>

    <div class="statsRow">
      <span class="statLabel">Energy:</span>
      <span class="statValue">${currentPokemon.energy}</span>
      <div class="pokeBar">
        <div class="pokeFill" style="--value:${currentPokemon.energy}%"></div>
      </div>
    </div>

    <div class="statsRow">
      <span class="statLabel">Health:</span>
      <span class="statValue">${currentPokemon.health}</span>
      <div class="pokeBar">
        <div class="pokeFill" style="--value:${currentPokemon.health}%"></div>
      </div>
    </div>

    <div class="typeRow">
      <span class="statLabel">Level:</span>
      <span class="statValue">${currentPokemon.level}</span>
    </div>
  </div>
`;
      // Update background color based on type
      updateBackground(pokemon[index].type);
      DOMSelectors.container.appendChild(statsDiv);

      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("buttonDiv");
      buttonDiv.innerHTML = `
      <button class="actionButton" id="feedButton">Feed</button>
      <button class="actionButton" id="playButton">Play</button>
      <button class="actionButton" id="sleepButton">Sleep</button>
      `
      DOMSelectors.container.appendChild(buttonDiv);
      // REVEAL NEW STUFF
      document.querySelector(".subHeader").classList.remove("Hidden");
      setUpFeedButton();
      setUpPlayButton();
      setUpSleepButton();
      setTimeout(restartDecay,3000);
    });
  });
}

function checkEvolution(poke) {
  if (poke.canEvolve && poke.level >= poke.levelRequirement) {
    const nextEvolution = pokemon.find((p) => p.id === poke.evolvesTo);
    if (nextEvolution) {
      nextEvolution.level = poke.level
      nextEvolution.hunger = poke.hunger
      nextEvolution.happiness = poke.happiness
      nextEvolution.energy = poke.energy
      nextEvolution.health = poke.health
      currentPokemon = nextEvolution
      console.log(`${poke.name} is evolving into ${nextEvolution.name}!`);
      // Update the card to show the new evolution
      DOMSelectors.container.innerHTML = "";
      makeCard(nextEvolution, DOMSelectors.container);
      //remove the select button if it exists
      const selectButton = DOMSelectors.container.querySelector(".cardButton");
      if (selectButton) {
        selectButton.remove();
      }
      // Update stats display
      const statsDiv = document.createElement("div");
      statsDiv.classList.add("statsDiv");
      statsDiv.innerHTML = `
        <h2>${nextEvolution.name} Stats</h2>
        <p>Type: ${nextEvolution.type}</p>
        <p class = "hungerDisplay">Hunger: ${nextEvolution.hunger}</p>
        <label for ="hungerBar">Hunger:</label>
        <progress id="hungerBar" max ="100" value="${nextEvolution.hunger}"></progress>
        <p class = "happinessDisplay">Happiness: ${nextEvolution.happiness}</p>
        <p class = "energyDisplay">Energy: ${nextEvolution.energy}</p>
        <p class = "healthDisplay">Health: ${nextEvolution.health}</p>
        <p class = "levelDisplay">Level: ${poke.level}</p>
      `;
      DOMSelectors.container.appendChild(statsDiv);

      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("buttonDiv");
      buttonDiv.innerHTML = `
      <button class="actionButton" id="feedButton">Feed</button>
      <button class="actionButton" id="playButton">Play</button>
      <button class="actionButton" id="sleepButton">Sleep</button>
      `
      DOMSelectors.container.appendChild(buttonDiv);
      setUpFeedButton();
      setUpPlayButton();
      console.log(currentPokemon);
      saveState();
    }
  }
}

function setUpFeedButton() {
  const feedButton = document.getElementById("feedButton");
  feedButton.addEventListener("click", () => {
    const pokemonName = currentPokemon.name
    const poke = pokemon.find((p) => p.name === pokemonName);
    if (poke.hunger < 100) {
      poke.hunger = poke.hunger + 1;
      const hungerDisplay = document.querySelector(".hungerDisplay")
      hungerDisplay.textContent = `Hunger: ${poke.hunger}`
      saveState();
    } else {
      feedButton.innerHTML = `${poke.name}'s Hunger is maxed!`;
      feedButton.classList.add("smallText");
      setTimeout(() => {
        feedButton.innerHTML = `Feed`;
        feedButton.classList.remove("smallText");
      }, 3000);
    }      
  })
}

let sleepInterval = null;
let statusText = null;

function setUpSleepButton () {
  const sleepButton = document.getElementById("sleepButton");
  const feedButton = document.getElementById("feedButton");
  const playButton = document.getElementById("playButton")
  const card = DOMSelectors.container.firstElementChild;
  if (!card) return;
  
  if (!sleepButton) return;
  
  sleepButton.addEventListener("click", () => {
    if (!currentPokemon) return;

    if (!sleepButton.classList.contains("sleeping")) {
      sleepButton.classList.add("sleeping");
      sleepButton.textContent = "Wake Up";
      feedButton.disabled = true;
      playButton.disabled = true;
      if (!statusText) {
        statusText = document.createElement("h2");
        statusText.classList.add("status");
        card.appendChild(statusText);
      }
      statusText.textContent = `SLP`;

      sleepInterval = setInterval(() => {
        if (currentPokemon.energy < 100) {
          currentPokemon.energy = Math.min(100, currentPokemon.energy + 2);
          updateStatsUI(currentPokemon);
          saveState();
        } else {
          feedButton.disabled = false;
          playButton.disabled = false;
          clearInterval(sleepInterval);
          sleepButton.classList.remove("sleeping");
          sleepButton.textContent = "Sleep";
          if (statusText) statusText.remove(), statusText = null;
        }
      }, 3000)
    } else {
      feedButton.disabled = false;
      playButton.disabled = false;
      sleepButton.classList.remove("sleeping");
      sleepButton.textContent = "Sleep";
      clearInterval(sleepInterval);
      if (statusText) statusText.remove(), statusText = null;
    }
  })
}

function setUpPlayButton() {
  const playButton = document.getElementById("playButton");
  playButton.addEventListener("click", () => {

    const pokemonName = document
      .querySelector(".statsDiv h2")
      .textContent.split(" ")[0];
    const poke = pokemon.find((p) => p.name === pokemonName);
    if (poke.happiness < 100) {
      poke.happiness = poke.happiness + 1;
      const happinessDisplay = document.querySelector(".happinessDisplay")
      happinessDisplay.textContent = `Happiness: ${poke.happiness}`
      saveState();
    } else {
      playButton.innerHTML = `${poke.name}'s Happiness is maxed!`;
      playButton.classList.add("smallText");
      setTimeout(() => {
        playButton.innerHTML = `Play`;
        playButton.classList.remove("smallText");
      }, 3000);      
    }
  })
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
    <h2 class="itemDesc"> ${item.desc} </h2>
    <button class="itemButton"> Add to Cart </button>
    </div>`
  );
}

function setUpBuyButton() {
  const buttons = document.querySelectorAll(".itemButton");
  const container = document.querySelector(".cartItems");
  total = 0;
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const item = event.target.closest(".item");
      const productName = item.dataset.name;
      const product = items.find((p) => p.name === productName);
      const inCart = cart.find((c) => c.name === product.name);

      if (inCart) {
        inCart.quantity++;
        const existingItem = container.querySelector(
          `[data-title="${product.name}"]`
        );
        console.log(existingItem);
        existingItem.textContent = `${product.name} x${inCart.quantity}`;
        console.log(inCart.quantity);
        total = total + product.price;
        document.querySelector(
          ".cartTotal"
        ).textContent = `Your total is: $${total}`;
      } else {
        cart.push({ ...product, quantity: 1 });
        container.insertAdjacentHTML(
          "beforeend",
          `<h2 class= "cartItem" data-title="${product.name}">${product.name} x1</h2>`
        );
        total = total + product.price;
        document.querySelector(
          ".cartTotal"
        ).textContent = `Your total is: $${total}`;
      }
      console.log(cart);
    });
  });

  const checkoutButton = document.querySelector(".checkoutButton");
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
        cart.forEach((item) => {
          const invItem = inventory.find((i) => i.name === item.name);
          if (invItem) {
            invItem.quantity += item.quantity
          } else {
            inventory.push(item);
          }
        });
        console.log(inventory);
        money = money - total;
        cart = [];
        container.textContent = "";
        total = 0;
        document.querySelector(
          ".cartTotal"
        ).textContent = `Your total is: $${total}`;
        updateMoney(money);
        updateInventory();
        inventoryUse();
        saveState();
      } else {
        checkoutButton.textContent = "Not enough Pokedollars";
      }
    }
  });
}

function updateInventory() {
  const container = document.querySelector(".inventory")

  if (!container) return;

  inventory.forEach((itm) => {
    let itemDiv = container.querySelector(`[data-name="${itm.name}"]`);

    if (!itemDiv) {
      itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.dataset.name = itm.name;
      itemDiv.innerHTML = `
        <h2 class="itemName">${itm.name}</h2>
        <img src="${itm.sprite}" alt="${itm.name}" class="itemSprite" />
        <h2 class="itemDesc">${itm.desc}</h2>
        <h2 class="itemQuantity">Quantity: x${itm.quantity}</h2>
        <button class="useItem" data-name="${itm.name}">Use</button>
      `;
      container.appendChild(itemDiv);
    } else {
      const qtyDisplay = itemDiv.querySelector(".itemQuantity");
      qtyDisplay.textContent = `Quantity: x${itm.quantity}`;
    }
  });

  inventory
    .filter((itm) => itm.quantity <= 0)
    .forEach((itm) => {
      const itemDiv = container.querySelector(`[data-name="${itm.name}"]`);
      if (itemDiv) container.removeChild(itemDiv);
    });
}

function inventoryUse() {
  const invContainer = document.querySelector(".inventory");
  if (!invContainer) return;

  if (invContainer._listenerAttached) return;
  invContainer._listenerAttached = true;

  invContainer.addEventListener("click", (event) => {
    const btn = event.target.closest(".useItem");
    if (!btn) return;

    const itemName = btn.dataset.name;
    const item = inventory.find((itm) => itm.name === itemName);
    if (!item) return;

    if (!currentPokemon) {
      return;
    }

    if (btn.dataset.confirm !== "true") {
      btn.dataset.confirm = "true";
      const originalText = btn.textContent;
      btn.textContent = "Confirm?";

      btn._confirmTimeout = setTimeout(() => {
        btn.dataset.confirm = "false";
        btn.textContent = originalText;
        delete btn._confirmTimeout;
      }, 3000);
      return;
    }

    if (btn._confirmTimeout) {
      clearTimeout(btn._confirmTimeout);
      delete btn._confirmTimeout;
    }

    btn.dataset.confirm = "false";
    btn.textContent = "Use";

    if (btn._confirmTimeout) {
      clearTimeout(btn._confirmTimeout);
      delete btn._confirmTimeout;
    }

    console.log()
    if (item.type === "Heal") {
      console.log("test")
      if ((currentPokemon.health || 0) > 99) {
        btn.textContent = "Too Much Health";
        setTimeout(() => (btn.textContent = "Use"), 1500);
        return;
      }

      if (currentPokemon.health === 0) {
        btn.textContent = "Use Revive First";
        setTimeout(() => (btn.textContent = "Use"), 1500);
        return;
      }
      currentPokemon.health = Math.min(
        100,
        currentPokemon.health + item.value
      );
      item.quantity = item.quantity - 1;
      updateStatsUI(currentPokemon);

    } else if (item.type === "Level Up") {
      if ((currentPokemon.level) < 100) {
        currentPokemon.level = Math.min(
          100,
          currentPokemon.level + item.value
        );
        item.quantity = item.quantity - 1;
        updateStatsUI(currentPokemon);
      }
    } else if (item.type === "Revive") {
      if (currentPokemon.health !== 0) {
        btn.textContent = "Pokemon is Alive";
        setTimeout(() => (btn.textContent = "Use"), 1500);
        return;
      } else {
        currentPokemon.health = Math.min(
          100,
          currentPokemon.health + item.value
        );
        item.quantity = item.quantity - 1;
        updateStatsUI(currentPokemon);
      }
    }

    const itemDiv = invContainer.querySelector(`[data-name="${item.name}"]`)
    if (itemDiv) {
      const qtyDisplay = itemDiv.querySelector(".itemQuantity");
      qtyDisplay.textContent = `Quantity: x${item.quantity}`;

      if (item.quantity <= 0) {
        itemDiv.remove();
      }
    }
    saveState();
  })
};

updateMoney(money);
updateInventory();
inventoryUse();
console.log(`Current Poke: ${currentPokemon}`);

// INITIAL STARTERS

if (currentPokemon) {
  renderCurrentPokemon(currentPokemon);
  const starterText = document.querySelector(".starterText");
  if (starterText) starterText.remove();
} else {
  // No saved Pokémon, show starter options
  makeCard(pokemon[0], DOMSelectors.container);
  makeCard(pokemon[3], DOMSelectors.container);
  makeCard(pokemon[6], DOMSelectors.container);
  setupStarterButtons();
}

//INITIALIZE SIDEBAR

document.querySelector(".toggleButton").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});

setUpMinigameButton();
setUpShopButton();
setUpClosePageButton();

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
  document.querySelector(".cartButton").classList.toggle("open");
  console.log("test")
});

setUpBuyButton();
updateInventory();