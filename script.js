let time = 60 * 60 * 24;

const tick = function () {
  let days = String(Math.trunc(time / (60 * 60 * 24))).padStart(2, 0);
  let hours = String(Math.trunc((time % (60 * 60 * 24)) / (60 * 60))).padStart(
    2,
    0
  );
  let mins = String(Math.trunc((time % (60 * 60)) / 60)).padStart(2, 0);
  let secs = String(time % 60).padStart(2, 0);

  document.querySelector(".day").textContent = days;
  document.querySelector(".hour").textContent = hours;
  document.querySelector(".min").textContent = mins;
  document.querySelector(".sec").textContent = secs;

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${red},${green},${blue});`;

  if (time == 0) {
    clearInterval(timer);
  }

  time--;
};

tick();
const timer = setInterval(tick, 1000);
