$('#search-input').keyup(function(){
  if($(this).val() == ''){
    $('#search-input').hide();
    $('#search-input').blur(); 
    $('#clock').show();
    $("body").css("background-color", "rgb(27,32,40)"); 
  } else if ($(this).val().match(/^r\/+/g)) {
    $("body").css("background-image", "linear-gradient(135deg, rgb(255, 132, 86), rgb(255, 69, 0))");
  } else if ($(this).val().match(/^tt\/+/g)) {
    $("body").css("background-image", "linear-gradient(135deg, rgb(29, 161, 242), rgb(25, 96, 143))")
  } else if ($(this).val().match(/^y\/+/g)) {
    $("body").css("background-image", "linear-gradient(135deg, rgb(205, 32, 31), rgb(205, 76, 31))")
  } else if ($(this).val().match(/^g\/+/g)) {
    $("body").css("background-image", "linear-gradient(135deg, rgb(43, 43, 43), rgb(59, 59, 59)")
  } else if ($(this).val().match(/^i\/+/g)) {
    $("body").css("background-image", "linear-gradient(45deg, rgb(64, 93, 230), rgb(88, 81, 219), rgb(131, 58, 180), rgb(193, 53, 132), rgb(225, 48, 108), rgb(253, 29, 29)")
  } else if ($(this).val().match(/^tw\/+/g)) {
    $("body").css("background-image", "linear-gradient(135deg, rgb(169, 112, 255), rgb(67, 44, 101)")
  } else if ($(this).val().match(/^mk\/+/g)) {
    $("body").css("background-color", "rgb(50,52,55)")
    $("body").css("color", "rgb(209,208,197)")
    $("body").css("caret-color", "rgb(226,183,20)")
  } else {
    $("body").css("background-image", "none");
    $("body").css("background-color", "rgb(27,32,40)");
    $("body").css("color", "rgb(204,204,181)")
    $("body").css("caret-color", "auto")
  }
  
});

// Detecting if it's an url

$(document).ready(function(){
  $('#search-input').keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      s_input = document.getElementById('search-input').value;
      if (s_input.match(/(http|https)?:\/\//g)){
        // for urls with http/https
        window.open(`${s_input}`, "_self", false);
        $("#search-input").val(''); 

      } else if (s_input.match(/^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g)) {
        // for ip addresses
        window.open(`http://${s_input}`, "_self", false);
        $("#search-input").val(''); 

      } else if (s_input.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
        // for urls without http://www or https://www
        window.open(`http://www.${s_input}`, "_self", false);
        $("#search-input").val(''); 
      } else if (s_input.match(/^r\/+/g)){
        // Reddit
        window.open(`https://www.reddit.com/${s_input}`, "_self", false)
        $("#search-input").val(''); 
      } else if (s_input.match(/^tt\/+/g)) {
        // Twitter
        s_input_without_prefix = s_input.replace(/^tt\/+/g, '')
        window.open(`https://www.twitter.com/${s_input_without_prefix}`, "_self", false)
        $("#search-input").val(''); 
      } else if (s_input.match(/^y\/+/g)) {
        // Youtube
        s_input_without_prefix = s_input.replace(/y\/+/g, '')
        window.open(`https://www.youtube.com/${s_input_without_prefix}`, "_self", false);
        $("#search-input").val(''); 
      } else if (s_input.match(/^g\/+/g)) {
        // Github
        s_input_without_prefix = s_input.replace(/^g\/+/g, '')
        window.open(`https://www.github.com/${s_input_without_prefix}`, "_self", false);
        $("#search-input").val(''); 
      } else if (s_input.match(/^i\/+/g)) {
        // Instagram
        s_input_without_prefix = s_input.replace(/^i\/+/g, '')
        window.open(`https://www.instagram.com/${s_input_without_prefix}`, "_self", false);
        $("#search-input").val(''); 
      } else if (s_input.match(/^tw\/+/g)) {
        // Twitch
        s_input_without_prefix = s_input.replace(/^tw\/+/g, '')
        window.open(`https://www.twitch.com/${s_input_without_prefix}`, "_self", false);
        $("#search-input").val(''); 
      } else if (s_input.match(/^mk\/+/g)) {
        // Monkeytype
        s_input_without_prefix = s_input.replace(/^mk\/+/g, '')
        window.open(`https://www.monkeytype.com/${s_input_without_prefix}`, "_self", false);
        $("#search-input").val(''); 
      } else {
        window.open(`https://www.google.com/search?q=${s_input}`, "_self", false);
        $("#search-input").val(''); 

      }
    }
  });
});

// clearing textarea
$("textarea").blur(function() {
  $("body").css("background-image", "none");
  $("body").css("background-color", "rgb(27,32,40)");
  $("body").css("caret-color", "auto")
  $("#search-input").val(''); 
  $('#search-input').hide();
  $('#clock').show(); 
});
