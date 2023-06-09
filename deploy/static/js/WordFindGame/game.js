const letterTitleBox = document.getElementById("letter-title");
const letterInputBox = document.getElementById("letter");
const submitBtn = document.getElementById("submit-btn");
const gameData = JSON.parse(localStorage.getItem("gameData"));
const plantList = ["moon", "earth", "mars", "sun"];

//checking input data to letter data handler
const checkInputToLetterHandler = (inputData) => {
  cho = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  result = "";
  for (i = 0; i < inputData.length; i++) {
    code = inputData.charCodeAt(i) - 44032;
    if (code > -1 && code < 11172) result += cho[Math.floor(code / 588)];
  }
  return result;
};

//if all plants are deleted -> event handler
const showGameOverEventHandler = () => {
  document.querySelector("#time-box").style.display = "none";
  document.querySelector(".letter-form").style.display = "none";
  document.querySelector(".people-life").style.display = "none";
  document.querySelector(".error-box").style.display = "inline-block";
};

//plant create event handler
const plantCreateEventHandler = (removeCnt) => {
  removeCnt -= 1;
  document.querySelector(`.${plantList[removeCnt]}`).classList.remove("hide");
  return removeCnt;
};

//plant delete event handler
const plantDeleteEventHandler = (removeCnt) => {
  document.querySelector(`.${plantList[removeCnt]}`).classList.add("hide");
  removeCnt += 1;
  return removeCnt;
};

//check response code handler
const checkResponseCodeHandler = (req) => {
  var removeCnt = parseInt(localStorage.getItem("removeCnt"));

  //reset input value
  letterInputBox.value = "";

  //if all plants are deleted -> event handler
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
};

//DOM elements get ready to rendering
document.addEventListener("DOMContentLoaded", function () {
  letterTitleBox.innerHTML = gameData.playLetters;
  //set removeCnt to LocalStorage
  localStorage.setItem("removeCnt", 0);
  //set timer to LocalStorage
  localStorage.setItem("time", 10);
});

//submit button event handler
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //checking input data to letter data handler
  const inputData = checkInputToLetterHandler(letterInputBox.value);

  if (inputData !== gameData.playLetters)
    return checkResponseCodeHandler({ status: "LETTER_ERROR" });
  //send input data to server
  const formData = new FormData();
  formData.append("inputData", letterInputBox.value);

  fetch("/WordFindGame/v1/dict", { method: "POST", body: formData })
    .then((res) => res.json())
    .then((res) => {
      //check response code handler
      checkResponseCodeHandler(res);
    });
});
