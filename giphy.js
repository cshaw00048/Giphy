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

  var type = $(this).attr("data-type");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response){
      var results = response.data;

      for (var i = 0; i = results.length; i++) {
        var animalDiv = $("<div class=\"band-item\">");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animated = results [i]. rating; 

        var p = $("<p>").text("Rating: " + rating);

        var animated = results [i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;
      }
    })

})

})