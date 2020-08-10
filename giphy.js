$(document).ready(function(){

  var bands = [
    "Skid Row", "Ratt", "Def Leppard", "Cinderella", "Bon Jovi", "Motley Crue",
    "Dokken", "Poison", "Quiet Riot", "Twisted Sister", "Whitesnake",
    "Warrant", "Kiss", "Tesla", "Scorpions", "Guns N' Roses",
    "Van Halen", "Aerosmith", "Ozzy Osbourne", "White Lion", "Winger"
] 

function populateButtons(bandArray, bandClass, bandArea){
  $(bandArea).empty();

  for (var i = 0; i < bandArray.length; i++) {
    var music = $("<button>")
    music.addClass(bandArray);
    music.attr("data-type", bandArray[i]);
    music.text(bandArray[i]);
    $(bandArea).append(music);
  } 
}

$(document).on("click", ".band-button", function() {
  $("#bands").empty();
  $(".band-button").removeClass("active");
  $this.addClass("active");
})

})