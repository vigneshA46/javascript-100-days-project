//program for newyear coundown
//find no of dayss
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const mins = document.querySelector("#minutes");
const sec = document.querySelector("#sec");
const currentYear = new Date().getFullYear();
const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);
function update() {
  const currentDate = new Date();
  const diff = newYear - currentDate;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);
  days.innerHTML = d;
  hours.innerHTML = h;
  mins.innerHTML = m;
  sec.innerHTML = s;
}
setInterval(update, 1000);
