function inputVal(input) {
  switch (true) {
    /* 
     * CHECK INPUT FOR URLs WITH HTTP OR HTTPS
     */
    case /(http|https)?\/\//g.test(input):
      window.open(`${input}`, "_self", false);
      break;
    /*
     * CHECK INPUT FOR IP ADDRESSES
     */
    case /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g.test(input):
    /*
     * CHECK URLs WITHOUT HTTP://WWW OR HTTPS://WWW
     */
    case /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(input):
      window.open(`http://${input}`, "_self", false);
      break;

    /*
     * SHORTCUTS FOR WEBSITES THAT I USE OFTEN
     */

    // REDDIT
    case /^r\/+/g.test(input):
      window.open(`https://reddit.com/${input}`, "_self", false);
      break;

    // TWITTER
    case /^tt\/+/g.test(input):
      let tt_input = input.replace(/^tt\/+/g, "");
      window.open(`https://twitter.com/${tt_input}`, "_self", false);
      break;

    // YOUTUBE
    case /^y\/+/g.test(input):
      let y_input = input.replace(/^y\/+/g, "");
      window.open(`https://youtube.com/${y_input}`, "_self", false);
      break;

    // GITHUB
    case /^g\/+/g.test(input):
      let g_input = input.replace(/^g\/+/g, "");
      window.open(`https://github.com/${g_input}`, "_self", false);
      break;

    // INSTAGRAM
    case /^i\/+/g.test(input):
      let i_input = input.replace(/^i\/+/g, "");
      window.open(`https://instagram.com/${i_input}`, "_self", false);
      break;

    // TWITCH
    case /^tw\/+/g.test(input):
      let tw_input = input.replace(/^tw\/+/g, "");
      window.open(`https://twitch.com/${tw_input}`, "_self", false);
      break;

    // MONKEYTYPE
    case /^mk\/+/g.test(input):
      let mk_input = input.replace(/^mk\/+/g, "");
      window.open(`https://monkeytype.com/${mk_input}`, "_self", false);
      break;

    // SPOTIFY
    case /^s\/+/g.test(input):
      let s_input = input.replace(/^s\/+/g, "");
      window.open(`https://open.spotify.com/${s_input}`, "_self", false);
      break;

    // WHATSAPP
    case /^w\/+/g.test(input):
      let w_input = input.replace(/^w\/+/g, "");
      window.open(`https://web.whatsapp.com/${w_input}`, "_self", false);
      break;

    // TRANSLATOR
    case /^tr\/+/g.test(input):
      let tr_input = input.replace(/^tr\/+/g, "");
      window.open(`https://translate.google.com/`, "_self", false);
      break;

    // DISCORD
    case /^dc\/+/g.test(input):
      let dc_input = input.replace(/^dc\/+/g, "");
      window.open(`https://discord.com/app`, "_self", false);
      break;

    // GMAIL
    case /^m\/+/g.test(input):
      let gm_input = input.replace(/^m\/+/g, "");
      window.open(`https://gmail.com`, "_self", false);
      break;

    // NETFLIX
    case /^n\/+/g.test(input):
      let n_input = input.replace(/^n\/+/g, "");
      window.open(`https://netflix.com`, "_self", false);
      break;

    /*
     * SHORTCUT FOR SEARCHES IN SOME SITES
     * Prefix for search [:]
     */

    // SEARCH ON YOUTUBE
    case /^y:/g.test(input):
      let ys_input = input.replace(/^y:/g, "").replace(" ", "+");
      window.open(`https://www.youtube.com/results?search_query=${ys_input}`, "_self", false);
      break;

    // SEARCH ON GITHUB
    case /^g:/g.test(input):
      let gs_input = input.replace(/^g:/g, "").replace(" ", "+");
      window.open(`https://github.com/search?q=${gs_input}`, "_self", false);
      break

    // SEARCH ON TWITCH
    case /^tw:/g.test(input):
      let tws_input = input.replace(/^tw:/g, "");
      window.open(`https://www.twitch.tv/search?term=${tws_input}`, "_self", false);
      break

    // SEARCH ON TWITTER
    case /^tt:/g.test(input):
      let tts_input = input.replace(/^tt:/g, "");
      window.open(`https://twitter.com/search?q=${tts_input}&src=typed_query`, "_self", false);
      break
    
    // SEARCH ON TRANSLATOR
    case /^tr:/g.test(input):
      let trs_input = input.replace(/^tr:/g, "");
      window.open(`https://translate.google.com/#view=home&op=translate&sl=auto&tl=pt&text=${trs_input}`, "_self", false);
      break
    default:
      window.open(`https://google.com/search?q=${input}`, "_self", false);
      break;
  }
}

function backColor(input) {
  /*
   * CHECK IF PREFIX FOR EACH WEBSITE WAS SEARCHED
   * THEN APPLY THE BACKGROUND COLOR FOR WEBSITE
   */
  switch (true) {
    // REDDIT
    case /^r\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(255, 132, 86), rgb(255, 69, 0))";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // TWITTER
    case /^tt\/+/g.test(input):
    case /^tt:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(29, 161, 242), rgb(25, 96, 143))";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // YOUTUBE
    case /^y:/g.test(input):
    case /^y\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(205, 32, 31), rgb(205, 76, 31))";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // GITHUB
    case /^g\/+/g.test(input):
    case /^g:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(28, 33, 40), rgb(45, 51, 59)";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // INSTAGRAM
    case /^i\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(45deg, rgb(64, 93, 230), rgb(88, 81, 219), rgb(131, 58, 180), rgb(193, 53, 132), rgb(225, 48, 108), rgb(253, 29, 29)";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // TWITCH
    case /^tw\/+/g.test(input):
    case /^tw:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(169, 112, 255), rgb(67, 44, 101)";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // MONKEYTYPE
    case /^mk\/+/g.test(input):
      body.style.backgroundColor = "#323437";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // SPOTIFY
    case /^s\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(29, 211, 94), rgb(30, 215, 96)";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // WHATSAPP
    case /^w\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(37, 211, 102), rgb(18, 140, 126), rgb(7, 94, 84))";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // TRANSLATOR
    case /^tr\/+/g.test(input):
    case /^tr:/g.test(input):
      body.style.backgroundColor = "rgb(26, 115, 232)";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // DISCORD
    case /^dc\/+/g.test(input):
      body.style.backgroundColor = "#7289da";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // GMAIL
    case /^m\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #dd5145, #dd5145)";
      body.style.color = "#ffffff";
      clock.style.color = "#ffffff";
      break;

    // NETFLIX
    case /^n\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #E50914, #CB020C)";
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
