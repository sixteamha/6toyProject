let CardsCount = 12;
let PlayersCount = 4;
document.getElementById("game-start-btn").addEventListener("click", (event) => {
  event.preventDefault();

  const cardNumber = document.getElementById("result-card").innerText;
  const playerNumber = document.getElementById("result-person").innerText;
  localStorage.setItem("cardNumber", cardNumber);
  localStorage.setItem("playerNumber", playerNumber);
  window.location.href = "game.html";
});

document.getElementById("game-back-btn").addEventListener("click", () => {
  window.location.href = "start.html";
});
const cardexample = () => {
  document.getElementById("cards-container").replaceChildren();
  for (let i = 0; i < CardsCount; i++) {
    let cardItem = document.createElement("div");
    cardItem.className = "card-box";
    cardItem.innerHTML = `
          <div id="card">
              <div id="card-front">
              </div>
          </div>
        `;
    document.getElementById("cards-container").appendChild(cardItem);
    const cardBoxes = document.querySelectorAll(".card-box");
    switch (CardsCount) {
      case 20:
        cardBoxes.forEach((cardBox) => {
          cardBox.style.height = "12.5vh";
          cardBox.style.width = "20%";
        });
        break;

      case 16:
        cardBoxes.forEach((cardBox) => {
          cardBox.style.height = "12.5vh";
          cardBox.style.width = "25%";
        });
        break;

      case 12:
        cardBoxes.forEach((cardBox) => {
          cardBox.style.height = "17.5vh";
          cardBox.style.width = "25%";
        });
        break;

      default:
        break;
    }
  }
};
cardexample();
const count = (type, val) => {
  const resultPersonElement = document.getElementById("result-person");
  const resultCardElement = document.getElementById("result-card");
  let card = resultCardElement.innerText;
  let person = resultPersonElement.innerText;
  switch (val) {
    case "card":
      if (type === "plus") {
        card >= 20 ? (card = parseInt(card)) : (card = parseInt(card) + 4);
      } else if (type === "minus") {
        card <= 12 ? (card = parseInt(card)) : (card = parseInt(card) - 4);
      }
      resultCardElement.innerText = card;
      CardsCount = card;
      return cardexample();
    case "person":
      if (type === "plus") {
        person >= 6
          ? (person = parseInt(person))
          : (person = parseInt(person) + 1);
      } else if (type === "minus") {
        person <= 2
          ? (person = parseInt(person))
          : (person = parseInt(person) - 1);
      }
      PlayersCount = card;
      resultPersonElement.innerText = person;
    default:
      break;
  }
};

const personPlusIcon = () => {
  let personHtml = document.createElement("div");
  personHtml.className = "background-img";
  return document.getElementById("player-select-div").innerHTML(personHtml);
};
