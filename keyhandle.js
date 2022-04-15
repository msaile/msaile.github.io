var clock = document.getElementById("clock");
var search_input = document.getElementById("search-input");

// Key Listener //
window.addEventListener('keydown', (event) => {
  switch(event.code) {
    case  "Escape":
      this.document.body.style.backgroundColor = "#002b36";
      this.document.body.style.backgroundImage = "none";
      body.style.color = "#93a1a1";
      clock.style.color = "#93a1a1";
      search_input.value = "";
      search_input.blur();
      search_input.style.display = "none";
      clock.style.display = "block";
    case "ScrollLock":
    case "AltLeft":
    case "AltRight":
    case "ControlLeft":
    case "ControlRight":
    case "Tab":
      return;
  }

  clock.style.display = "none";
  search_input.style.display = "block";
  search_input.focus();
});
