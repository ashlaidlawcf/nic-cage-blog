import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll("post")
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
