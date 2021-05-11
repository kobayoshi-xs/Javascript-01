let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let mSec = 0;

let interval = null;

function stopWatch(){
  mSec++;
  if (mSec / 10 == 1){
    seconds++;
    mSec = 0;
    if (seconds / 60 == 1){
      minutes++;
      seconds = 0;
      if (minutes / 60 == 1){
        hours++;
        minutes = 0;
      }
    }
  }
  
  
  timer.innerHTML = hours + " : " + minutes + " : " + seconds + " : " + mSec;
}

start.addEventListener("click", function() {
    interval = setInterval(stopWatch, 100);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
})

stop.addEventListener("click", function() {
    clearInterval(interval);
    stop.disabled = true;
    start.disabled = false;
})

reset.addEventListener("click", function() {
    timer.innerHTML = "0 : 0 : 0 : 0"
    hours = 0;
    minutes = 0;
    seconds = 0;
    mSec = 0;
    reset.disabled = true;
    stop.disabled = true;
    start.disabled = false;
})