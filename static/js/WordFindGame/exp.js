const enterBtn = document.getElementById("enter-btn");
const letterNumber = document.getElementById("letter");

//렌덤한 초성 문자열 제작하는 함수
const makeRandomStringFunc = (length) => {
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
  for (i = 0; i < length; i++) {
    result += cho[Math.floor(Math.random() * cho.length)];
  }
  return result;
};

// input 내용 유효성 검사 함수
const checkInputDataHandler = (data) => {
  if (isNaN(data)) {
    return { status: "error", message: "잘못된 입력입니다." };
  } else if (data === "") {
    return { status: "error", message: "다시 입력해주세요." };
  } else if (data >= "6") {
    return { status: "error", message: "3~5사이의 숫자를 입력해주세요." };
  }
  return { status: "success" };
};

enterBtn.addEventListener("click", (e) => {
  e.preventDefault();

  responseCode = checkInputDataHandler(letterNumber.value);
  // 입력한 데이터가 숫자가 아닐 경우 이벤트 헨들링
  if (responseCode.status === "error") {
    alert(responseCode.message);
  }
  // 입력한 데이터가 숫자 맞을 경우 이벤트 헨들링
  else {
    // 보낼 데이터 명세서
    req = {
      playLetters: makeRandomStringFunc(parseInt(letterNumber.value)),
    };
    // localStorage에 해당 내용 저장
    localStorage.setItem("gameData", JSON.stringify(req));
    document.location.href = "/WordFindGame/game";
  }
});
