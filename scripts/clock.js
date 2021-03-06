// html 에서 <div class="js-clock"> 가져오기
// js-clock의 자식 탐색
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-clocktitle");

//현재시간을 알려주는 함수
function getTime() {
  const date = new Date();
  const day = date.getDay();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  //시간나타낼 위치
  clockTitle.innerText =
    // '`${hours}:${minutes}:${seconds}`;

    `${hours < 10 ? `0${hours}` : hours} : ${
      minutes < 10 ? `0${minutes}` : minutes
    } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime(); 
  setInterval(getTime, 1000); //1초단위로 움직이도록
}

init();
