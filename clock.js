function setClock() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = dobuleNumber(m);
  s = dobuleNumber(s);
  h = dobuleNumber(h);
  document.getElementById("numbers").innerHTML = h + ":" + m + ":" + s;
  setTimeout(setClock, 500);
}

function dobuleNumber(i, h) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getDayName() {
  let date = new Date();
  let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"];
  let d = days[date.getDay()];
  let today = date.getDate();
  let month = date.getMonth() + 1;
  today = dobuleNumber(today);
  month = dobuleNumber(month);

  const dateDisplay = (document.getElementById("date").innerHTML =
    today + "/" + month);

  let displayName = document.getElementsByClassName("display-day");
  for (let i = 0; i < displayName.length; i++) {
    if (d === displayName[i].id) {
      displayName[i].classList.add("highlight");
    }
  }
}
