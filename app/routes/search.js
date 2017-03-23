import Ember from 'ember';

var getGifs = $.get("http://api.giphy.com/v1/gifs/search?q=nic+cage&api_key=dc6zaTOxFJmzC&limit=100").then(function(result) {
  var gifs = [];
  for (var i = 0; i < result.data.length; i++) {
    gifs[i] = {
      image: result.data[i].images.original.url
    };
  }
  return gifs;
});

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      gifs: getGifs
    });
  },
  actions: {
    addPost(params) {
      var post = this.store.createRecord("post", params);
      post.save();
      this.transitionTo("index");
    }
  }
});
