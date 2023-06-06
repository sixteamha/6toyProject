/// 카드 생성 ///
let cards = [];
let choices = [];
let collectCard = [];
let cardItemsEl = [];
let flippedCards = [];
let lock = false;
// 플레이어를 생성.
let players;
let loser = {};
// 플레이어 상태 객체생성자
function Player(name) {
  this.name = name;
  this.isOut = false;
  this.turn = false;
}

const GameStart = () => {
  //로컬스토리지에서 플레이어숫자를 받아옴
  let numPlayers = localStorage.getItem("playerNumber");

  // 플레이어 객체 생성
  players = [];
  for (let i = 0; i < numPlayers; i++) {
    players = [...players, new Player(`플레이어${i + 1}`)];
  }
  // 첫번째 순서시작
  if (players.length > 0) {
    players[0].turn = true;
  }
};
GameStart();
const cardsCreate = () => {
  while (cards.length < localStorage.getItem("cardNumber") / 2) {
    let cardItem = Math.floor(Math.random() * 10) + 1;
    if (cards.indexOf(cardItem) === -1) {
      cards.push(cardItem);
    }
  }
};
const playerSuccessList = (currentPlayer) => {
  let winnerPlayer = document.createElement("h3");
  winnerPlayer.className = "winner-player";
  winnerPlayer.innerHTML = `${currentPlayer.name}`;

  return document
    .getElementById("players-success-container")
    .appendChild(winnerPlayer);
};
const playerLoserList = (currentPlayer) => {
  let loserPlayer = document.createElement("h3");
  loserPlayer.className = "Loser-player";
  loserPlayer.innerHTML = `${currentPlayer.name}`;

  return document
    .getElementById("players-loser-container")
    .appendChild(loserPlayer);
};
/// 카드 x 2 ,랜덤 섞기 ///
cardsCreate();
let gameCard = [...cards, ...cards].sort(() => Math.random() - 0.5);
// / 현재 플레이어 텍스트 변경 ///
const playerText = () => {
  let currentPlayerIndex = players.findIndex((player) => player.turn === true);
  let currentPlayer = players[currentPlayerIndex];
  if (players.length <= 1 || !currentPlayer) return console.log("No players");
  let innerText = `<h2> ${currentPlayer.name} </h2> 의 차례입니다`;
  return (document.getElementById("players-Text").innerHTML = innerText);
};

document.getElementById("back-Button").addEventListener("click", () => {
  window.location.href = "./index.html";
});

document.getElementById("retry-Button").addEventListener("click", () => {
  window.location.href = "";
});
/// 카드생성 ///
gameCard.forEach((card) => {
  let cardItem = document.createElement("div");

  cardItem.className = "card-box";
  cardItem.innerHTML = `
      <div id="card">
          <div id="card-front">
          <div class="card-title"></div>
          </div>
          <div id="card-back" style="background-image: url(../../static/img/우주인${card}.png);">
          <div class="card-title"><span></span> </div>
          </div>
      </div>
    `;
  document.getElementById("cards-container").appendChild(cardItem);
  cardItemsEl.push(cardItem);
  //카드클릭 이벤트 함수 ///
  const cardClickHandler = (e) => {
    /// 빠르게 카드 뒤집거나 똑같은 카드누르면 실행 하지못하도록 ///
    if (lock || flippedCards.includes(cardItem)) return;
    // settimeout 함수가 끝나기 전에 실행이 되지않도록 // note
    // 똑같은 카드를 선택 못하도록 // note
    cardClick(card);
    cardItem.children[0].style.transform = "rotateY(180deg)";
    flippedCards = [...flippedCards, cardItem];
    collectCard = [cardItem, ...collectCard];
    if (choices.length === 2) {
      lock = true;
      if (choices[0] !== choices[1]) {
        // 0.5초 후에 카드를 원상태로 돌림
        setTimeout(() => {
          flippedCards[0].children[0].style.transform = "rotateY(0deg)";
          flippedCards[1].children[0].style.transform = "rotateY(0deg)";
          flippedCards = [];
          collectCard.splice(0, 2);
          nextTurn();
          playerText();
          choices = [];
          console.log(collectCard);
          lock = false;
        }, 500);
      } else {
        flippedCards = [];
        nextTurn();
        playerText();
        choices = [];
        cardItem.removeEventListener("click", cardClickHandler);
        lock = false;
      }
    }
  };
  /// for문 이벤트 선언 ///
  cardItem.addEventListener("click", cardClickHandler);
});
const allCardFlip = () => {
  if (lock | (flippedCards.length > 0)) return;
  lock = true;
  let allCardFlipCards = cardItemsEl.filter(
    (card) => !collectCard.includes(card)
  );
  console.log(allCardFlipCards);
  allCardFlipCards.forEach((card) => {
    card.children[0].style.transform = "rotateY(180deg)";
    setTimeout(() => {
      card.children[0].style.transform = "rotateY(0deg)";
      lock = false;
    }, 300);
  });
};
document
  .getElementById("allFlip-Button")
  .addEventListener("click", allCardFlip);
///카드 클릭 ///
const cardClick = (e) => {
  if (choices[1]) {
    return cardCollect(e);
  } else {
    return choices.push(e);
  }
};
/// 카드 비교 ///
const cardCollect = (e) => {
  return () => console.log(choices, collectCard);
};

/**
 *
 * @returns 1. 현재 플레이어 찾기
 * @returns 2. 플레이어의 카드 두개가 맞으면 제외
 * @returns 3. 차례변경
 */
const nextTurn = () => {
  // 현재 플레이어 찾기
  let currentPlayerIndex = players.findIndex((player) => player.turn === true);
  let currentPlayer = players[currentPlayerIndex];
  // 같은 카드를 두 개 뒤집었다면, 해당 플레이어를 게임에서 제외
  if (choices[0] === choices[1]) {
    currentPlayer.isOut = true;
    playerSuccessList(currentPlayer);
  }

  // 플레이어의 차례를 변경
  currentPlayer.turn = false;
  console.log(currentPlayer);
  // 다음 플레이어
  let nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
  let nextPlayer = players[nextPlayerIndex];
  // 남은 플레이어들
  let activePlayers = players.filter((player) => !player.isOut);
  // 남은 플레이어들이 1명이면 종료
  if (activePlayers.length === 1) {
    loser = activePlayers[0];
    playerLoserList(loser);
    console.log(`${activePlayers[0].name} 번 탈락`);
    return;
  }
  // 다음사람없으면 다음사람 또 없으면 다음사람 반복.
  while (nextPlayer.isOut) {
    nextPlayerIndex = (nextPlayerIndex + 1) % players.length;
    nextPlayer = players[nextPlayerIndex];
  }

  // 다음 플레이어의 차례로 설정
  nextPlayer.turn = true;
};

console.log(players);
