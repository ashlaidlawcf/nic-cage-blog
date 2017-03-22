import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,
  actions: {
    updatePost(post) {
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        body: this.get("body"),
        img_link: this.get("img_link")
      }
      this.set('isShowing', false);
      this.sendAction("updatePost", post, params);
    },
    showForm() {
      this.set('isShowing', true);
    },
    hideForm() {
      this.set('isShowing', false);
    }
  }
});
