var clock = document.getElementById("clock");
var search_input = document.getElementById("search-input");
var input = document.getElementById("search-input");
var body = document.body

// Key Listener //
window.addEventListener('keydown', (event) => {
  switch(event.code) {
    case  "Escape":
      body.style.backgroundColor = "#00040a";
      this.document.body.style.backgroundImage = "none";
      body.style.color = "#f7f5f6";
      clock.style.color = "#f7f5f6";
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
    case "OSLeft":
    case "OSRight":
      return;
  }

  clock.style.display = "none";
  search_input.style.display = "block";
  search_input.focus();
});


// -- Listening input field  -- //
input.addEventListener("keyup", (event) => {

    // -- Check if input is empty -- //
   if (input.value == "") {
    input.style.display = "none";
    input.blur();
    clock.style.display = "block";
   } else {
     backColor(input.value);
   }
})

// -- Avoid enter breaks line -- //
input.addEventListener("keypress", (event) => {
  switch (event.code){
    case "Enter":
      event.preventDefault();

      inputVal(input.value);
      input.value = "";
  }
})

// -- Checks if input field is out of focus -- //
input.addEventListener("blur", () => {
    input.style.display = "none";
    input.blur();
    clock.style.display = "block";
    input.value = "";

    body.style.backgroundImage = "none";
    body.style.backgroundColor = "#00040a";
    body.style.color = "#f7f5f6";
    clock.style.color = "#f7f5f6";
})