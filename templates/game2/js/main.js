document
  .getElementById("game-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById("card-number").value;
    const playerNumber = document.getElementById("player-number").value;

    // Validation logic here...

    // If validation passes, store values and redirect to game.html
    localStorage.setItem("cardNumber", cardNumber);
    localStorage.setItem("playerNumber", playerNumber);

    window.location.href = "game.html";
  });
