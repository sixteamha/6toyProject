const letterTitleBox = document.getElementById("letter-title");
const letterInputBox = document.getElementById("letter");
const submitBtn = document.getElementById("submit-btn");
const plantList = ["moon", "earth", "mars", "sun"];

const showGameOverEventHandler = () => {
  document.querySelector(".letter-form").style.display = "none";
  document.querySelector(".people-life").style.display = "none";
  document.querySelector(".error-box").style.display = "inline-block";
};

const plantCreateEventHandler = (removeCnt) => {
  removeCnt -= 1;
  document.querySelector(`.${plantList[removeCnt]}`).classList.remove("hide");
  return removeCnt;
};

const plantDeleteEventHandler = (removeCnt) => {
  document.querySelector(`.${plantList[removeCnt]}`).classList.add("hide");
  removeCnt += 1;
  return removeCnt;
};

//check response code handler
const checkResponseCodeHandler = (req) => {
  var removeCnt = parseInt(localStorage.getItem("removeCnt"));

  //if all plants are deleted
  if (removeCnt >= 4) return showGameOverEventHandler();
  if (req.status === "success") {
    //plant create event handler
    var nowRemoveCnt = plantCreateEventHandler(removeCnt);
    localStorage.setItem("removeCnt", nowRemoveCnt);
  } else {
    //plant delete event handler
    var nowRemoveCnt = plantDeleteEventHandler(removeCnt);
    localStorage.setItem("removeCnt", nowRemoveCnt);
  }
  letterInputBox.value = "";
};

//DOM elements get ready to rendering
document.addEventListener("DOMContentLoaded", function () {
  //get gameData from LocalStorage
  const gameData = JSON.parse(localStorage.getItem("gameData"));
  letterTitleBox.innerHTML = gameData.playLetters;
  //set removeCnt to LocalStorage
  localStorage.setItem("removeCnt", 0);
});

//submit button event handler
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("inputData", letterInputBox.value);

  fetch("/WordFindGame/v1/dict", { method: "POST", body: formData })
    .then((res) => res.json())
    .then((res) => {
      //check response code handler
      checkResponseCodeHandler(res);
    });
});
