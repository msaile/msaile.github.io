function inputVal(input) {
  switch (true) {
    // -- Check input for URL's with http or https -- //
    case /(http|https)?\/\//g.test(input):
      window.open(`${input}`, "_self", false);
      break;

    // -- Check input for IP addresses -- //
    case /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g.test(input):
    // -- Check URL's without http://www or https://www -- //
    case /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(input):
      window.open(`http://${input}`, "_self", false);
      break;

    //// PREFIXES ////
    // -- Check Reddit prefix (r/) -- //
    case /^r\/+/g.test(input):
      window.open(`https://reddit.com/${input}`, "_self", false);
      break;

    // -- Check Twitter prefix (tt/) -- //
    case /^tt\/+/g.test(input):
      let tt_input = input.replace(/^tt\/+/g, "");
      window.open(`https://twitter.com/${tt_input}`, "_self", false);
      break;

    // -- Check Youtube prefix (y/) -- //
    case /^y\/+/g.test(input):
      let y_input = input.replace(/^y\/+/g, "");
      window.open(`https://youtube.com/${y_input}`, "_self", false);
      break;

    // -- Check Github prefix (g/) -- //
    case /^g\/+/g.test(input):
      let g_input = input.replace(/^g\/+/g, "");
      window.open(`https://github.com/${g_input}`, "_self", false);
      break;

    // -- Check Instagram prefix (i/) -- //
    case /^i\/+/g.test(input):
      let i_input = input.replace(/^i\/+/g, "");
      window.open(`https://instagram.com/${i_input}`, "_self", false);
      break;

    // -- Check Twitch prefix (tw/) -- //
    case /^tw\/+/g.test(input):
      let tw_input = input.replace(/^tw\/+/g, "");
      window.open(`https://twitch.com/${tw_input}`, "_self", false);
      break;

    // -- Check Monkeytype prefix (mk/) -- //
    case /^mk\/+/g.test(input):
      let mk_input = input.replace(/^mk\/+/g, "");
      window.open(`https://monkeytype.com/${mk_input}`, "_self", false);
      break;


      //// PREFIXES SEARCH /////
    // -- Search on Youtube -- //
    case /^y:/g.test(input):
      let ys_input = input.replace(/^y:/g, "").replace(" ", "+");
      window.open(`https://www.youtube.com/results?search_query=${ys_input}`, "_self", false);
      break;
    // -- Search on Github -- //
    case /^g:/g.test(input):
      let gs_input = input.replace(/^g:/g, "").replace(" ", "+");
      window.open(`https://github.com/search?q=${gs_input}`, "_self", false);
      break
    // -- Search on Twitch -- //
    case /^tw:/g.test(input):
      let tws_input = input.replace(/^tw:/g, "");
      window.open(`https://www.twitch.tv/search?term=${tws_input}`, "_self", false);
      break
    default:
      window.open(`https://google.com/search?q=${input}`, "_self", false);
      break;
  }
}

function inputSearch(input) {
}

function backColor(input) {
  switch (true) {
    // -- Background for Reddit -- //
    case /^r\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(255, 132, 86), rgb(255, 69, 0))";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // -- Background for Twitter -- //
    case /^tt\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(29, 161, 242), rgb(25, 96, 143))";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // -- Background for Youtube -- //
    case /^y:/g.test(input):
    case /^y\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(205, 32, 31), rgb(205, 76, 31))";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // -- Background for Github -- //
    case /^g\/+/g.test(input):
    case /^g:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(28, 33, 40), rgb(45, 51, 59)";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // -- Background for Instagram -- //
    case /^i\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(45deg, rgb(64, 93, 230), rgb(88, 81, 219), rgb(131, 58, 180), rgb(193, 53, 132), rgb(225, 48, 108), rgb(253, 29, 29)";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // -- Background for Twitch -- //
    case /^tw\/+/g.test(input):
    case /^tw:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(169, 112, 255), rgb(67, 44, 101)";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // -- Background for Monkeytype -- //
    case /^mk\/+/g.test(input):
      body.style.backgroundColor = "#323437";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    default:
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#00040a";
      body.style.color = "#f7f5f6";
      clock.style.color = "#f7f5f6";
      break;
    
  }
}