// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeS(time) {
    let hrs = time / 3600000;
    let hours = Math.floor(hrs);
  
    let min = (hrs - hours) * 60;
    let minutes = Math.floor(min);
  
    let sec = (min - minutes) * 60;
    let seconds = Math.floor(sec);
  
    let Mis = (sec - seconds) * 100;
    let ms = Math.floor(Mis);
  
    let M = minutes.toString().padStart(2, "0");
    let S = seconds.toString().padStart(2, "0");
    let MS = ms.toString().padStart(2, "0");
  
    return `${M}:${S}:${MS}`;
  }
  
  // Declare variables to use in our functions below
  
  let startT;
  let elapT = 0;
  let intervalT;
  
  // Create function to modify innerHTML
  
  function print(cur) {
    document.getElementById("display").innerHTML = cur;
  }
  
  // Create "start", "pause" and "reset" functions
  
  function start() {
    startT = Date.now() - elapT;
    intervalT = setInterval(function printTime() {
      elapT = Date.now() - startT;
      print(timeS(elapT));
    }, 10);
    showButton("PAUSE");
  }
  
  function pause() {
    clearInterval(intervalT);
    showButton("PLAY");
  }
  
  function reset() {
    clearInterval(intervalT);
    print("00:00:00");
    elapT = 0;
    showButton("PLAY");
  }
  
  // Create function to display buttons
  
  function showButton(buttonKey) {
    const btnShow = buttonKey === "PLAY" ? playB : pauseB;
    const btnHide = buttonKey === "PLAY" ? pauseB : playB;
    btnShow.style.display = "block";
    btnHide.style.display = "none";
  }
  // Create event listeners
  
  let playB = document.getElementById("playBtn");
  let pauseB = document.getElementById("pauseBtn");
  let resetB = document.getElementById("resetBtn");
  
  playB.addEventListener("click", start);
  pauseB.addEventListener("click", pause);
  resetB.addEventListener("click", reset);