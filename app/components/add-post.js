import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addPost() {
      var date = new Date();
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        body: this.get("body"),
        img_link: this.get("img_link"),
        date: date.now()
      }
    }
  }
});
