var input = document.getElementById("search-input");
var clock = document.getElementById("clock");
var body = document.body

// -- Listening input field  -- //
input.addEventListener("keyup", (event) => {
    // -- Check if input is empty -- //
  if (input.value == "") {
    input.style.display = "none";
    input.blur();
    clock.style.display = "block";
  
    // -- Background for Reddit -- //
  } else if (input.value.match(/^r\/+/g)) {
    document.body.style.backgroundImage = "linear-gradient(135deg, rgb(255, 132, 86), rgb(255, 69, 0))";
    document.body.style.color = "#ffffff";
    clock.style.color = "#ffffff";

    // -- Background for Twitter -- //
  } else if (input.value.match(/^tt\/+/g)) {
    body.style.backgroundImage = "linear-gradient(135deg, rgb(29, 161, 242), rgb(25, 96, 143))";
    body.style.color = "#ffffff";
    clock.style.color = "#ffffff";

    // -- Background for Youtube -- //
  } else if (input.value.match(/^y\/+/g)) {
    body.style.backgroundImage = "linear-gradient(135deg, rgb(205, 32, 31), rgb(205, 76, 31))";
    body.style.color = "#ffffff";
    clock.style.color = "#ffffff";

    // -- Background for Github -- //
  } else if (input.value.match(/^g\/+/g)) {
    body.style.backgroundImage = "linear-gradient(135deg, rgb(28, 33, 40), rgb(45, 51, 59)";
    body.style.color = "#ffffff";
    clock.style.color = "#ffffff";

    // -- Background for Instagram -- //
  } else if (input.value.match(/^i\/+/g)) {
    body.style.backgroundImage = "linear-gradient(45deg, rgb(64, 93, 230), rgb(88, 81, 219), rgb(131, 58, 180), rgb(193, 53, 132), rgb(225, 48, 108), rgb(253, 29, 29)";
    body.style.color = "#ffffff";
    clock.style.color = "#ffffff";

    // -- Background for Twitch -- //
  } else if (input.value.match(/^tw\/+/g)) {
    body.style.backgroundImage = "linear-gradient(135deg, rgb(169, 112, 255), rgb(67, 44, 101)";
    body.style.color = "#ffffff";
    clock.style.color = "#ffffff";

    //  -- Background for Monkeytype -- //
  } else if (input.value.match(/^mk\/+/g)) {
    body.style.backgroundColor = "#323437";
    body.style.color = "#d1d0c5"; 
  }
  
  else {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "#002b36";
    body.style.color = "#93a1a1";
    clock.style.color = "#93a1a1";
  }
})

// -- Avoid enter breaks line -- //
input.addEventListener("keypress", (event) => {
  switch (event.code){
    case "Enter":
      event.preventDefault();

        // -- Check input for URL's with http or https -- //
      if (input.value.match(/(http|https)?:\/\//g)) {
        window.open(`${input.value}`, "_self", false);
        input.value = "";

        // -- Check input for Ip Addresses -- //
      } else if (input.value.match(/^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g)) {
        window.open(`http://${input.value}`, "_self", false)
        input.value = "";
      
        // -- Check URL's without http://wwww or https://www
      } else if (input.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
        window.open(`http://www.${input.value}`, "_self", false)
        input.value = "";

        // -- Check Reddit prefix (r/) -- //
      } else if (input.value.match(/^r\/+/g)) {
        window.open(`https://www.reddit.com/${input.value}`, "_self", false)
        input.value = "";

        // -- Check Twitter prefix (tt/) -- //
      } else if (input.value.match(/^tt\/+/g)) {
        let r_input = input.value.replace(/^tt\/+/g, "")
        window.open(`https://www.twitter.com/${r_input}`, "_self", false);
        input.value = "";

        // -- Check Youtube prefix (y/) -- //
      } else if (input.value.match(/^y\/+/g)) {
        let r_input = input.value.replace(/^y\/+/g, "")
        window.open(`https://www.youtube.com/${r_input}`, "_self", false);
        input.value = "";

        // -- Check Github prefix (g/) -- //
      } else if (input.value.match(/^g\/+/g)) {
        let r_input = input.value.replace(/^g\/+/g, "");
        window.open(`https://www.github.com/${r_input}`, "_self", false);
        input.value = "";
      
        // -- Check Instagram prefix (i/) -- //
      } else if (input.value.match(/^i\/+/g)) {
        let r_input = input.value.replace(/^i\/+/g, "");
        window.open(`https://www.instagram.com/${r_input}`, "_self", false);
        input.value = "";

        // -- Check Twitch prefix (tw/) -- //
      } else if (input.value.match(/^tw\/+/g)) {
        let r_input = input.value.replace(/^tw\/+/g, "");
        window.open(`https://twitch.com/${r_input}`, "_self", false);
        input.value = "";

        // -- Check Monkeytype prefix (mk/) -- //
      } else if (input.value.match(/^mk\/+/g)) {
        let r_input = input.value.replace(/^mk\/+/g, "");
        window.open(`https://www.monkeytype.com/${r_input}`, "_self", false);
        input.value = "";
      }
      // -- Search on google -- /
      else {
        window.open(`https://google.com/search?q=${input.value}`, "_self", false);
        input.value = "";
      } 
  }
})