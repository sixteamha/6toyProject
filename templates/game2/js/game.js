/// 카드 생성 ///
let cards = [];
let choices = [];
let collectCard = [];
let flippedCards = [];
let lock = false;
const cardsCreate = () => {
  while (cards.length < localStorage.getItem("cardNumber") / 2) {
    let cardItem = Math.floor(Math.random() * 20) + 1;
    if (cards.indexOf(cardItem) === -1) {
      cards.push(cardItem);
    }
  }
};

/// 카드 x 2 ,랜덤 섞기 ///
cardsCreate();
let gameCard = [...cards, ...cards].sort(() => Math.random() - 0.5);

/// 카드생성 ///
gameCard.forEach((card) => {
  let cardItem = document.createElement("div");
  cardItem.className = "card-box";
  cardItem.innerHTML = `
      <div id="card">
          <div id="card-front">
          <div class="card-title">*</div>
          </div>
          <div id="card-back">
          <div class="card-title">${card}</div>
          </div>
      </div>
    `;
  document.getElementById("cards-container").appendChild(cardItem);

  //카드클릭 이벤트 함수 ///
  const cardClickHandler = (e) => {
    /// 빠르게 카드 뒤집거나 똑같은 카드누르면 실행 하지못하도록 ///
    if (lock || flippedCards.includes(cardItem)) return;
    cardClick(card);

    cardItem.children[0].style.transform = "rotateY(180deg)";
    flippedCards.push(cardItem);
    if (choices.length === 2) {
      lock = true;
      if (choices[0] !== choices[1]) {
        // 0.5초 후에 카드를 원상태로 돌림
        setTimeout(() => {
          flippedCards[0].children[0].style.transform = "rotateY(0deg)";
          flippedCards[1].children[0].style.transform = "rotateY(0deg)";
          flippedCards = [];
          choices = [];
          lock = false;
        }, 500);
      } else {
        collectCard.push(choices[0]);
        flippedCards = [];
        choices = [];
        cardItem.removeEventListener("click", cardClickHandler);
        lock = false;
      }
    }
  };
  /// for문 이벤트 선언 ///
  cardItem.addEventListener("click", cardClickHandler);
});

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
