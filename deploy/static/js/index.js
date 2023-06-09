const folderList = ["folder1", "folder2", "folder3", "folder4"];
const modalList = ["game1", "game2", "game3", "game4"];
let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

//DOM elements get ready to rendering
document.addEventListener("DOMContentLoaded", function () {
  //set clock event handler
  document.querySelector(".nav-clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;
});

//show modal window event handlers
const showModalEventHandler = (target) => {
  Math.floor(Math.random() * 200) + 400 + "px";
  document.querySelector(`#${target}`).classList.remove("hide");
};

//delete modal window event handlers
const deleteModalEventHandler = (target) => {
  document.querySelector(`#${target}`).classList.add("hide");
};

folderList.map((folder) => {
  let fold = document.querySelector(`#${folder}`);
  //dragging modal window,foler event handlers
  fold.addEventListener("dblclick", (event) => {
    // (1) absolute 속성과 zIndex 프로퍼티를 수정해 공이 제일 위에서 움직이기 위한 준비를 합니다.
    fold.style.position = "absolute";
    fold.style.zIndex = 1000;

    // 현재 위치한 부모에서 body로 직접 이동하여
    // body를 기준으로 위치를 지정합니다.
    document.querySelector(".container").append(fold);

    // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
    function moveAt(pageX, pageY) {
      fold.style.left = pageX - fold.offsetWidth / 2 + "px";
      fold.style.top = pageY - fold.offsetHeight / 2 + "px";
    }

    // 포인터 아래로 공을 이동시킵니다.
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    // (2) mousemove로 공을 움직입니다.
    document.addEventListener("mousemove", onMouseMove);

    // (3) 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    fold.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      fold.onmouseup = null;
    };
  });
});

modalList.map((modal) => {
  let mod = document.querySelector(`#${modal}`);
  //dragging modal window,foler event handlers
  mod.addEventListener("dblclick", (event) => {
    // (1) absolute 속성과 zIndex 프로퍼티를 수정해 공이 제일 위에서 움직이기 위한 준비를 합니다.
    mod.style.position = "absolute";
    mod.style.zIndex = 1000;

    // 현재 위치한 부모에서 body로 직접 이동하여
    // body를 기준으로 위치를 지정합니다.
    document.querySelector(".container").append(mod);

    // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
    function moveAt(pageX, pageY) {
      mod.style.left = pageX - mod.offsetWidth / 2 + "px";
      mod.style.top = pageY - mod.offsetHeight / 2 + "px";
    }

    // 포인터 아래로 공을 이동시킵니다.
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    // (2) mousemove로 공을 움직입니다.
    document.addEventListener("mousemove", onMouseMove);

    // (3) 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    mod.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      mod.onmouseup = null;
    };
  });
});
