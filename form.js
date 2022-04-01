$('#search-input').keyup(function(){
  if($(this).val() == ''){
    $('#search-input').hide();
    $('#search-input').blur(); 
    $('#clock').show();
    $("body").css("background-color", "rgb(27,32,40)"); 
  } else if ($(this).val().match(\W/r\/+/g)) {
    $("body").css("background-image", "linear-gradient(rgb(255, 132, 86), rgb(255, 69, 0))");
  } else if ($(this).val().match(\W/tt\/+/g)) {
    $("body").css("background-image", "linear-gradient(rgb(29, 161, 242), rgb(25, 96, 143))")
  } else if ($(this).val().match(\W/yt\/+/g)) {
    $("body").css("background-image", "linear-gradient(rgb(205, 32, 31), rgb(205, 76, 31))")
  } else {
    $("body").css("background-image", "none");
    $("body").css("background-color", "rgb(27,32,40)");
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

      } else if (s_input.match(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g)) {
        // for ip addresses
        window.open(`http://${s_input}`, "_self", false);
        $("#search-input").val(''); 

      } else if (s_input.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
        // for urls without http://www or https://www
        window.open(`http://www.${s_input}`, "_self", false);
        $("#search-input").val(''); 
      } else if (s_input.match(\W/r\/+/g)){
        // reddit
        window.open(`https://www.reddit.com/${s_input}`, "_self", false)
        $("#search-input").val(''); 
      } else if (s_input.match(\W/tt\/+/g)) {
        // twitter
        s_input_without_prefix = s_input.replace(/tt\/+/g, '')
        window.open(`https://www.twitter.com/${s_input_without_prefix}`, "_self", false)
        $("#search-input").val(''); 
      } else if (s_input.match(\W/yt\/+/g)) {
        s_input_without_prefix = s_input.replace(/yt\/+/g, '')
        window.open(`https://www.youtube.com/${s_input_without_prefix}`, "_self", false);
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
  $("#search-input").val(''); 
  $('#search-input').hide();
  $('#clock').show(); 
});
