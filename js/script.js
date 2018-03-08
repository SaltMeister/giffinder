// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  // WRITE A CLICK HANDLER HERE
  /*
    1. click handler function
    2. get the typed input from the search input box
    3. call the functions below!
  */$("button").click(function() {
      $(".gallery").html("");
        var input = $("input").val();
        callGiphyAPIWithSearchTerm(input);
    });
    $("input").keypress(function(e) {
        $(".gallery").html("");
          if(e.which === 13) {
          $("button").click();    
          } 
    });
  
  function giphyURLWithSearchTerm(searchTerm) {
          // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
    var giphyURL = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
      console.log(giphyURL);
}


  function appendImageToGallery(srcURL) {
      // write a function that will append an <img> to the div with class="gallery"
      // using the URL provided in the parameters
       $(".gallery").append("<img src=" +srcURL+"></img>");
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
    for(var i = 0; i < 4; i ++) {
          // use the giphyURLWithSearchTerm function to customize the url below
      var giphyURL = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
      $.ajax({
        url: giphyURL,
        method: "GET",
        success: function(response) {
            var random = Math.floor(Math.random()*response.data.length);
            console.log(random);
            var url = response.data[random].images.original.url;
            appendImageToGallery(url);
            $("body").append(giphyURLWithSearchTerm(searchTerm));
          
        },
      });
    } 
  }
});
