document.getElementById("start").addEventListener("click", () => {
  window.location.href = "/CardFilpCame/main";
});

const descriptionClickHandler = () => {
  refeshDescription();
  let [first, second, third, fourth] = document.querySelectorAll(".card-box");

  const rotate = (element, delay, rotateBackAfter = 0) => {
    setTimeout(() => {
      element.children[0].style.transform = "rotateY(180deg)";
      if (rotateBackAfter > 0) {
        setTimeout(() => {
          element.children[0].style.transform = "rotateY(0deg)";
          fourth.children[0].style.transform = "rotateY(0deg)";
        }, rotateBackAfter);
      }
    }, delay);
  };
  rotate(first, 0, 1000);
  rotate(fourth, 500, 1000);
  rotate(first, 1500);
  rotate(second, 2000);
  setTimeout(() => {
    WinTextCreate();
  }, 3000);
};

const WinTextCreate = () => {
  let innerText = `YOU WIN!`;
  document.querySelector("#Card-Example-container").style.filter = "blur(10px)";
  document.getElementById("winnerText-h2").innerText = innerText;
};
const refeshDescription = () => {
  let oneTwoThreeFourStyle = document.querySelectorAll(".card-box");
  let CardExampleCont = document.querySelector("#Card-Example-container");
  oneTwoThreeFourStyle.forEach((element) => {
    element.children[0].style.transform = "rotateY(0deg)";
  });
  CardExampleCont.style.filter = "blur(0px)";
  document.getElementById("winnerText-h2").innerText = "";
};

const MenuButton = () => {
  window.location.href = "/";
};
document
  .getElementById("description")
  .addEventListener("click", descriptionClickHandler);
