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
        var bandDiv = $("<div class=\"band-item\">");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animated = results [i]. rating; 

        var p = $("<p>").text("Rating: " + rating);

        var animated = results [i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;

        var bandImage = $("<img>");
        bandImage.attr("src", still);
        bandImage.attr("data-still", still);
        bandImage.attr("data-animate", animated);
        bandImage.attr("data-state", "still");

        bandDiv.append(p);
        bandDiv.append(bandImage);

        $("#bands").append(bandDiv);
      }
    });
});

$(document).on("click", ".animal-image", function() {

  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  }
  else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

  $("#add-band").on("click", function(event){
    event.preventDefault();
    var newBand = $("input").eq(0).val();

    if(newBand.length > 2) {
      bands.push(newBand);
    }

    populateButtons(bands, "band-button", "#band-buttons");
  });

  populateButtons(bands, "band-button", "#band-buttons");
});