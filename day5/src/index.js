// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
var time = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const toDay = new Date();
  const differDay = xmasDay.getTime() - toDay.getTime();

  const day = Math.floor(differDay/(1000*60*60*24));
  const hour = Math.floor(differDay/(1000*60*60))%24;
  const minute = Math.floor(differDay/(1000*60))%60;
  const second = Math.floor(differDay/1000)%60;
  time.innerText = `${day}d ${
      hour <10 ? `0${hour}` : hour}h ${
          minute <10 ? `0${minute}` : minute}m ${
              second <10 ? `0${second}` : second}s`;
}

function init() {
    getTime();
    setInterval(getTime,1000);
}

init();
