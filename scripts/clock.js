var clock = document.getElementById('clock');

function time() {
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();

  if (m < 10) {m = `0${m}`};
  if (h < 10) {h - `0${h}`};

  clock.innerHTML =  `${h} ${m}`
}

setInterval(time, 5)
