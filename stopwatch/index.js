const btnstart = document.querySelector(".start");
const btnstop = document.querySelector(".stop");
const btnreset = document.querySelector(".reset");
let hours = 00;
let minutes = 00;
let seconds = 00;
let millis = 00;
btnstart.addEventListener("click", () => {
  starttimer = setInterval(() => {
    millis++;
    if (millis == 100) {
      seconds++;
      millis = 0;
    }
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
    updatedisplay();
  }, 10);
});
btnstop.addEventListener("click", () => {
  clearInterval(starttimer);
});
btnreset.addEventListener("click", () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  millis = 0;
  updatedisplay();
});
function updatedisplay() {
  //this function is to print the current time value
  phours = hours < 10 ? "0" + hours : hours;
  pminutes = minutes < 10 ? "0" + minutes : minutes;
  pseconds = seconds < 10 ? "0" + seconds : seconds;
  pmillis = millis < 10 ? "0" + millis : millis;
  document.querySelector(".hours").innerText = phours;
  document.querySelector(".mins").innerText = pminutes;
  document.querySelector(".sec").innerText = pseconds;
  document.querySelector(".ms").innerText = pmillis;
}
updatedisplay();
