document
  .getElementById("game-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById("card-number").value;
    const playerNumber = document.getElementById("player-number").value;

    localStorage.setItem("cardNumber", cardNumber);
    localStorage.setItem("playerNumber", playerNumber);

    window.location.href = "game.html";
  });
