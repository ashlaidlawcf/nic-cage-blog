import Ember from 'ember';


var getGifs = $.get("http://api.giphy.com/v1/gifs/search?q=nigel+thornberry&api_key=dc6zaTOxFJmzC&limit=100").then(function(result) {
  var gifs = [];
  for (var i = 0; i < result.data.length; i++) {
    gifs[i] = {
      image: result.data[i].images.original.url
    };
  }
  return gifs;
});

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      gifs: getGifs
    });
  }
});
