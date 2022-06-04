var clock = document.getElementById("clock");
var search_input = document.getElementById("search-input");
var input = document.getElementById("search-input");
var body = document.body

/*
 * KEY LISTENER FOR SPECIFIC KEYS
 */
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


/*
 * EVENT LISTENER FOR SEARCH INPUT FIELD
 */
input.addEventListener("keyup", (event) => {

   /*
    * CHECK IF SEARCH FIELD IS EMPTY ON KEYUP
    */
   if (input.value == "") {
    input.style.display = "none";
    input.blur();
    clock.style.display = "block";
   } else {
     backColor(input.value);
   }
})

/*
 * AVOID ENTER KEY TO BREAK LINE
 */
input.addEventListener("keypress", (event) => {
  switch (event.code){
    case "Enter":
      event.preventDefault();

      inputVal(input.value);
      input.value = "";
  }
})

/*
 * CHECK IF SEARCH FIELD IS OUT OF FOCUS
 */
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